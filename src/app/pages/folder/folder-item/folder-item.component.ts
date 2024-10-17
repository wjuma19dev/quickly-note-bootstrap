import { Component, input } from '@angular/core';
import { IFolder } from '../folder.service';

@Component({
  selector: 'app-folder-item',
  templateUrl: './folder-item.component.html',
  styleUrls: ['./folder-item.component.scss'],
})
export class FolderItemComponent {
  folder = input.required<IFolder>();

  marcarComoActivo() {
    console.log(this.folder());
  }
}
