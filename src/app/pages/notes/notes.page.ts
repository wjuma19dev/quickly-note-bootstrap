import { Component, OnInit, computed, inject } from '@angular/core';
import { NoteService } from './note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  notasArr = inject(NoteService).notas;
  notas = computed(() => this.notasArr().filter((nota) => !nota.papelera));

  constructor() {}

  ngOnInit() {}
}
