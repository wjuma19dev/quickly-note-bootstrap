import {
  AfterContentInit,
  Component,
  Input,
  OnInit,
  ViewChild,
  inject,
  input,
} from "@angular/core";
import { Nota } from "../note.model";
import {
  IonInput,
  ModalController,
  PopoverController,
  ToastController,
} from "@ionic/angular";
import { NoteService } from "../note.service";
import { MenuNoteComponent } from "src/app/components/menu-note/menu-note.component";
import { ToastService } from "src/app/services/toast.service";

@Component({
  selector: "app-new-note",
  templateUrl: "./new-note.component.html",
  styleUrls: ["./new-note.component.scss"],
})
export class NewNoteComponent implements OnInit, AfterContentInit {
  private _notaService: NoteService = inject(NoteService);

  // Controladores
  private _toastService: ToastService = inject(ToastService);
  toastCtrl: ToastController = inject(ToastController);
  modalCtrl: ModalController = inject(ModalController);
  popoverCtrl: PopoverController = inject(PopoverController);

  // Angular core
  @ViewChild(IonInput, { static: true }) ionInput!: IonInput;

  // Select
  customAlertOptions = {
    header: "Carpeta",
    subHeader: "Guarda tus notas etiquetadas",
    message: "Selecciona una categoria",
    translucent: true,
  };

  // Atributos
  public nota!: Nota;
  public estaGuardando: boolean = false;
  @Input() selected!: Nota;
  @Input() editMode!: boolean;

  ngAfterContentInit(): void {}

  ngOnInit(): void {
    if (!this.editMode) {
      // Crear la nota automaticamente una vez entre el modal
      const nota = new Nota("", "", new Date());
      // Pasando la referencia de la nota creada al atributo nota
      this.nota = nota;
      // Guardar la nota
      this._notaService.agregar(nota);
      // Presentar toast informando al cliente que se ha creado la nota
      this._toastService.presentToas(
        "alert-success",
        "bottom",
        "Nota creada correctamente",
        "checkmark-circle-outline",
      );
    } else {
      // Setear nota aqui
      this.nota = this.selected;
    }
  }

  // ngAfterContentInit(): void {
  //   console.log(this.ionInput);
  //   this.ionInput.setFocus();
  // }

  /**
   * [actualizarNota description]
   * Una vez creada la nota por defecto con valores predeterminados de sin titulo y sin contenido, esta funcion actualiza la nota creada con los valores correspondiente segun evento keyup del input y el textarea.
   */
  async actualizarNota(e: any) {
    this.estaGuardando = true;
    const name = e.target.name;
    if (this.nota && name === "titulo") {
      this.nota["titulo"] = e.target.value;
    } else if (this.nota && name === "contenido") {
      this.nota["contenido"] = e.target.value;
    }

    this._notaService.actualizar(this.nota);
    setTimeout(() => (this.estaGuardando = false), 1000);
  }

  abrirMenu(e: Event) {
    this.presentPopover(e);
  }

  async presentPopover(e: Event) {
    const popover = await this.popoverCtrl.create({
      component: MenuNoteComponent,
      componentProps: { noteId: this.nota?.id },
      mode: "ios",
      event: e,
    });
    await popover.present();
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }
}
