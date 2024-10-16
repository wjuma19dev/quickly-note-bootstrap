import { Component, Input, computed, inject, signal } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { NoteService } from 'src/app/pages/notes/note.service';

@Component({
  selector: 'app-menu-note',
  templateUrl: './menu-note.component.html',
  styleUrls: ['./menu-note.component.scss'],
})
export class MenuNoteComponent {
  // Controladores
  private _modalCtrl: ModalController = inject(ModalController);
  private _popoverCtrl: PopoverController = inject(PopoverController);

  // Servicios
  private _notaService: NoteService = inject(NoteService);

  // Propiedades
  @Input() noteId!: string;
  public notaEnPapelera = computed(
    () =>
      this._notaService.notas().find((nota) => nota.id === this.noteId)
        ?.papelera
  );

  // Metodos
  eliminarNota() {
    if (this.notaEnPapelera()) {
      // Eliminar la nota definitivamente
      this._notaService.eliminar(this.noteId);
    } else {
      // Enviar a la papelera de reciclaje
      this._notaService.enviarAPapelera(this.noteId);
    }

    this._popoverCtrl.dismiss();
    this._modalCtrl.dismiss();
  }
}
