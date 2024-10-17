import { Component, input } from '@angular/core';
import { IFolder } from '../folder.service';

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.scss'],
})
export class FolderListComponent {
  folders = input.required<IFolder[]>();
}
