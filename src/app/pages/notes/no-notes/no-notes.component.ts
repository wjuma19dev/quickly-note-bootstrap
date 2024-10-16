import { Component, input } from '@angular/core';

@Component({
  selector: 'app-no-notes',
  templateUrl: './no-notes.component.html',
  styleUrls: ['./no-notes.component.scss'],
})
export class NoNotesComponent {
  icon = input<string>();
  text = input<string>();

  constructor() {}
}
