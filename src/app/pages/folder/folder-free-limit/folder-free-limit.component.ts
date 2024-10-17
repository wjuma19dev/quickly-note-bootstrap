import { Component, computed, inject, input } from '@angular/core';
import { FolderService } from '../folder.service';

@Component({
  selector: 'app-folder-free-limit',
  templateUrl: './folder-free-limit.component.html',
  styleUrls: ['./folder-free-limit.component.scss'],
})
export class FolderFreeLimitComponent {
  foldersLong = input.required<number>();
}
