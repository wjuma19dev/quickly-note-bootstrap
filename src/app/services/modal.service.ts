import { inject, Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewNoteComponent } from '../pages/notes/new-note/new-note.component';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private _modalCtrl = inject(ModalController);

  async present(notaId: string) {
    const modal = await this._modalCtrl.create({
      component: NewNoteComponent,
      componentProps: { notaId, editMode: true },
    });
    await modal.present();
  }
}
