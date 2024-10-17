import { Injectable, signal } from '@angular/core';
import { nanoid } from 'nanoid';

export interface IFolder {
  id: string;
  label: string;
  active: boolean;
}

@Injectable({ providedIn: 'root' })
export class FolderService {
  private _folders = signal<IFolder[]>([
    { active: true, label: 'all', id: '1' },
  ]);
  public folders = this._folders.asReadonly();

  async agregar(label: string): Promise<IFolder> {
    const nuevoFolder: IFolder = { id: nanoid(24), label, active: false };
    await this._folders.update((folders) => [nuevoFolder, ...folders]);
    return nuevoFolder;
  }
}
