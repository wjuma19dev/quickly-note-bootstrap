import { Pipe, PipeTransform } from '@angular/core';
import { INota } from './note.interface';
import { IFolder } from '../folder/folder.service';

@Pipe({
  name: 'folderFilter',
})
export class FolderFilterPipe implements PipeTransform {
  transform(notas: INota[], folderId?: string) {
    return notas.filter((nota) => nota.folderId === folderId);
  }
}
