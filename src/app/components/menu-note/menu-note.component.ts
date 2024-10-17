import { Component, Input, computed, inject, signal } from '@angular/core';
import {
  AlertButton,
  ModalController,
  PopoverController,
} from '@ionic/angular';
import { NoteService } from 'src/app/pages/notes/note.service';
import { AlertaService } from 'src/app/services/alerta.service';

@Component({
  selector: 'app-menu-note',
  templateUrl: './menu-note.component.html',
  styleUrls: ['./menu-note.component.scss'],
})
export class MenuNoteComponent {
  // Controladores
  private _modalCtrl = inject(ModalController);
  private _popoverCtrl = inject(PopoverController);

  // Servicios
  private _notaService = inject(NoteService);
  private _alertaService = inject(AlertaService);

  // Propiedades
  @Input() noteId!: string;
  public notaEnPapelera = computed(
    () =>
      this._notaService.notas().find((nota) => nota.id === this.noteId)
        ?.papelera
  );
  public notaEnFavorito = computed(
    () =>
      this._notaService.notas().find((nota) => nota.id === this.noteId)
        ?.favorito
  );

  favorito() {
    // Solo se van a agregar notas a favoritos aquellas que no esten en la papelera de reciclaje
    if (!this.notaEnPapelera()) {
      this._notaService.enviarAFavoritos(this.noteId);
      this._popoverCtrl.dismiss();
    } else {
      console.log(
        'No se puede agregar la nota a favoritos por que la misma esta en la papelera de reciclaje, restaura primero la nota para agregarla.'
      );
    }
  }

  // Metodos
  eliminarNota() {
    if (this.notaEnPapelera()) {
      // Eliminar la nota definitivamente
      // Popover preguntar si desea eliminarla
      const alertButtons: AlertButton[] = [
        {
          text: 'Si, eliminar',
          role: 'aceptar',
          cssClass: 'text-morado fw-bold',
          handler: () => {
            this._notaService.eliminar(this.noteId);
            this._popoverCtrl.dismiss();
            this._modalCtrl.dismiss();
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'text-morado-100',
          handler: () => {
            this._popoverCtrl.dismiss();
          },
        },
      ];
      this._alertaService.presentAlert(
        'Eliminar Nota',
        '¿Quieres eliminar esta nota?',
        'Las notas eliminadas no se pueden recuperar.',
        alertButtons
      );
    } else {
      // Enviar a la papelera de reciclaje
      this._notaService.enviarAPapelera(this.noteId);
      this._popoverCtrl.dismiss();
      this._modalCtrl.dismiss();
    }
  }
}
