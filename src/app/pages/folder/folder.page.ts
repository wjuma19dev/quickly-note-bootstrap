import { Component, computed, inject } from '@angular/core';
import { FolderService } from './folder.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage {
  private _folderService = inject(FolderService);
  public folders = this._folderService.fordersFtNotas;
  public foldersLong = computed<number>(() => this.folders().length);
}
