import { Component, computed, inject } from '@angular/core';
import { NoteService } from '../notes/note.service';

@Component({
  selector: 'app-papelera',
  templateUrl: './papelera.page.html',
  styleUrls: ['./papelera.page.scss'],
})
export class PapeleraPage {
  constructor() {}

  notasArr = inject(NoteService).notas;
  notas = computed(() => this.notasArr().filter((nota) => nota.papelera));
}
