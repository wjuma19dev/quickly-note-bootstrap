import { Component, input } from '@angular/core';
import { INota } from 'src/app/pages/notes/note.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title = input.required<string>();
  public notas = input.required<INota[]>();
}
