import { Component, inject, input } from '@angular/core';
import { INota } from '../note.interface';
import { FolderService } from '../../folder/folder.service';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.scss'],
})
export class ListNotesComponent {
  notas = input.required<INota[]>();
  public folderSeleccionado = inject(FolderService).folderSeleccionado;
}
