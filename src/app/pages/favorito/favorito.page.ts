import { Component, computed, inject } from '@angular/core';
import { NoteService } from '../notes/note.service';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.page.html',
  styleUrls: ['./favorito.page.scss'],
})
export class FavoritoPage {
  constructor() {}

  notasArr = inject(NoteService).notas;
  notas = computed(() =>
    this.notasArr().filter((nota) => nota.favorito && !nota.papelera)
  );
}
