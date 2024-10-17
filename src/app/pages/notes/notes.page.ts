import { Component, computed, inject, ViewChild } from '@angular/core';
import { NoteService } from './note.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FolderService, IFolder } from '../folder/folder.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage {
  // Element ref
  @ViewChild('modal') modal!: ModalController;

  // @angular/core
  private _router = inject(Router);

  // Services
  private _folderService = inject(FolderService);
  private _noteService = inject(NoteService);

  // Propiedades
  private _notasArr = this._noteService.notas;
  public folders = this._folderService.folders;
  public folderSeleccionado = this._folderService.folderSeleccionado;
  public notas = computed(() =>
    this._notasArr().filter((nota) => !nota.papelera)
  );

  // Metodos
  async closeModal() {
    await this.modal.dismiss();
    this._router.navigate(['/folder']);
  }

  seleccionarFolder(folder: IFolder) {
    this._folderService.seleccionarFolder(folder.id);
    this.modal.dismiss();
  }
}
