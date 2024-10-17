import { Component, computed, inject, ViewChild } from '@angular/core';
import { NoteService } from './note.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage {
  @ViewChild('modal') modal!: ModalController;
  router = inject(Router);
  notasArr = inject(NoteService).notas;
  notas = computed(() => this.notasArr().filter((nota) => !nota.papelera));
  async closeModal() {
    await this.modal.dismiss();
    this.router.navigate(['/folder']);
  }
}
