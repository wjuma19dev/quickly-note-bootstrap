import { Component, inject, input } from '@angular/core';
import { INota } from '../note.interface';
import { ModalController } from '@ionic/angular';
import { NewNoteComponent } from '../new-note/new-note.component';

@Component({
  selector: 'app-item-note',
  templateUrl: './item-note.component.html',
  styleUrls: ['./item-note.component.scss'],
})
export class ItemNoteComponent {
  private _modalCtrl: ModalController = inject(ModalController);
  nota = input.required<INota>();

  async editarNota() {
    const modal = await this._modalCtrl.create({
      component: NewNoteComponent,
      componentProps: { notaId: this.nota().id, editMode: true },
    });
    await modal.present();
  }
}
