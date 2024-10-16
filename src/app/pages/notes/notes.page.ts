import { Component, computed, inject } from '@angular/core';
import { NoteService } from './note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage {
  notasArr = inject(NoteService).notas;
  notas = computed(() => this.notasArr().filter((nota) => !nota.papelera));

  constructor() {}
}
