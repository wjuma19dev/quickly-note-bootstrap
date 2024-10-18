import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../notes/note.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  private _noteService = inject(NoteService);
  logNotasPapelera = this._noteService.logNotasPapelera;

  logNotasFavorito = this._noteService.logNotasFavorito;

  // @angular/core
  router = inject(Router);

  public notas = computed(() =>
    this._noteService.notas().filter((nota) => !nota.papelera)
  );

  redirectTo(url: string) {
    this.router.navigate([url]);
  }
}
