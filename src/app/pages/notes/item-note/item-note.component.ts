import { Component, inject, input } from '@angular/core';
import { INota } from '../note.interface';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-item-note',
  templateUrl: './item-note.component.html',
  styleUrls: ['./item-note.component.scss'],
})
export class ItemNoteComponent {
  private _modalService = inject(ModalService);
  public nota = input.required<INota>();

  async editarNota() {
    this._modalService.present(this.nota().id);
  }
}
