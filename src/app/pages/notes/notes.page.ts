import { Component, computed, inject, ViewChild } from '@angular/core';
import { NoteService } from './note.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FolderService } from '../folder/folder.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage {
  // Element ref
  @ViewChild('modal') modal!: ModalController;

  // @angular/core
  router = inject(Router);

  // Services
  notasArr = inject(NoteService).notas;
  public folders = inject(FolderService).folders;

  // Propiedades
  notas = computed(() => this.notasArr().filter((nota) => !nota.papelera));

  // Metodos
  async closeModal() {
    await this.modal.dismiss();
    this.router.navigate(['/folder']);
  }
}
