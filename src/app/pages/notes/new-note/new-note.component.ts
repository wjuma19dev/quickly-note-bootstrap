import {
  Component,
  Input,
  OnInit,
  ViewChild,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { Nota } from '../note.model';
import {
  AlertInput,
  IonInput,
  ModalController,
  PopoverController,
} from '@ionic/angular';
import { NoteService } from '../note.service';
import { MenuNoteComponent } from 'src/app/components/menu-note/menu-note.component';
import { ToastService } from 'src/app/services/toast.service';
import { FolderService } from '../../folder/folder.service';
import { AlertaService } from 'src/app/services/alerta.service';
import { INota } from '../note.interface';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss'],
})
export class NewNoteComponent implements OnInit {
  // Servicios
  private _notaService = inject(NoteService);
  private _folderService = inject(FolderService);
  private _alertService = inject(AlertaService);

  // Controladores
  private _toastService = inject(ToastService);
  // private _toastCtrl = inject(ToastController);
  private _modalCtrl = inject(ModalController);
  private _popoverCtrl = inject(PopoverController);

  // Angular core
  @ViewChild(IonInput, { static: true }) ionInput!: IonInput;

  // Select
  customAlertOptions = {
    header: 'Carpeta',
    subHeader: 'Guarda tus notas etiquetadas',
    message: 'Selecciona una categoria',
    translucent: true,
  };

  // Atributos
  public nota = signal<any>([]);
  public estaGuardando: boolean = false;
  public folder = computed(
    () => this._folderService.folders().filter((folder) => folder.active)[0]
  );
  @Input() notaId!: string;
  @Input() editMode!: boolean;

  ngOnInit(): void {
    if (!this.editMode) {
      // Crear la nota automaticamente una vez entre el modal
      const nota = new Nota('', '', new Date(), this.folder().id);
      // Pasando la referencia de la nota creada al atributo nota
      this.nota.set(nota);
      // Guardar la nota
      this._notaService.agregar(nota);
      // Presentar toast informando al cliente que se ha creado la nota
      this._toastService.presentToas(
        'alert-simple-dark',
        'bottom',
        'Nota creada correctamente',
        'checkmark-circle-outline'
      );
    } else {
      // Setear nota y folder aqui caundo se esta editando la nota
      this.nota.update(
        () =>
          this._notaService.notas().filter((nota) => nota.id === this.notaId)[0]
      );
      this.folder = computed(
        () =>
          this._folderService
            .folders()
            .filter((folder) => folder.id === this.nota().folderId)[0]
      );
    }
  }

  escogerFolder() {
    const alertButtons = ['OK'];
    const alertInputs: AlertInput[] = [];

    this._folderService.folders().map((folder) => {
      alertInputs.push({
        checked: folder.id === this.folder().id,
        label:
          folder.label.substring(0, 1).toUpperCase() +
          folder.label.substring(1, folder.label.length),
        type: 'radio',
        value: folder.id,
        handler: (e) => {
          // Actualizar el FOLDER de la nota cada que la alerta cambie
          this.folder = computed(
            () =>
              this._folderService
                .folders()
                .filter((folder) => folder.id === e.value)[0]
          );
          this.nota().folderId = e.value;
          this._notaService.actualizar(this.nota);
        },
      });
    });

    this._alertService.presentAlert(
      'Folder',
      '',
      '',
      alertButtons,
      alertInputs,
      true
    );
  }

  /**
   * [actualizarNota description]
   * Una vez creada la nota por defecto con valores predeterminados de sin titulo y sin contenido, esta funcion actualiza la nota creada con los valores correspondiente segun evento keyup del input y el textarea.
   */
  async actualizarNota(e: any) {
    this.estaGuardando = true;
    this._notaService.actualizar(this.nota);
    // TODO crear aqui una promesa en actualizar nota para cuando termine de guarda me duevuelva el false para setear el estaGuardando y quitar el timeout
    setTimeout(() => (this.estaGuardando = false), 1000);
  }

  /**
   RESTAURAR NOTA DE LA PAPELERA DE RECICLAJE
   Esta funcion restaura una o varias notas desde la papelera de reciclaje al arrego de notas activas. 
   */
  public restaurar() {
    this._notaService.restaurar(this.nota().id);
    this.cerrarModal();
  }

  abrirMenu(e: Event) {
    this.presentPopover(e);
  }

  async presentPopover(e: Event) {
    const popover = await this._popoverCtrl.create({
      component: MenuNoteComponent,
      componentProps: { noteId: this.nota().id },
      mode: 'ios',
      event: e,
    });
    await popover.present();
  }

  cerrarModal() {
    this._modalCtrl.dismiss();
  }
}
