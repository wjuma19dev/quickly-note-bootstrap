import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../notes/note.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  logNotasPapelera = inject(NoteService).logNotasPapelera;

  // @angular/core
  router = inject(Router);

  redirectTo(url: string) {
    this.router.navigate([url]);
  }
}
