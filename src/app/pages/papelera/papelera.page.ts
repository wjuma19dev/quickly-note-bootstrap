import { Component, computed, inject } from '@angular/core';
import { NoteService } from '../notes/note.service';
import { FolderService } from '../folder/folder.service';
import { INota } from '../notes/note.interface';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-papelera',
  templateUrl: './papelera.page.html',
  styleUrls: ['./papelera.page.scss'],
})
export class PapeleraPage {
  // Service
  private _modalService = inject(ModalService);

  public termino: string = '';
  public fordersFtNotas = inject(FolderService).fordersFtNotas;
  public notas = inject(NoteService).notasEnPapelera;

  // Metodos
  abrirNota(nota: INota) {
    this._modalService.present(nota.id);
  }
}
