import { computed, Injectable, signal } from '@angular/core';
import { nanoid } from 'nanoid';

export interface IFolder {
  id: string;
  label: string;
  active: boolean;
  block: boolean;
}

@Injectable({ providedIn: 'root' })
export class FolderService {
  // Servicios

  // Propiedades
  private _folders = signal<IFolder[]>([
    { active: true, label: 'all', id: 'default', block: true },
  ]);
  public folders = this._folders.asReadonly();
  public folderSeleccionado = computed(() =>
    this._folders().find((folder) => folder.active)
  );

  async agregar(label: string): Promise<IFolder> {
    const nuevoFolder: IFolder = {
      id: nanoid(24),
      label,
      active: false,
      block: false,
    };
    await this._folders.update((folders) => [nuevoFolder, ...folders]);
    this.backup();
    return nuevoFolder;
  }

  async seleccionarFolder(folderId: string) {
    this._folders.update((folders) =>
      folders.map((folder) => {
        folder.active = false;
        if (folder.id === folderId) folder.active = true;
        return folder;
      })
    );
    this.backup();
  }

  async borrarFolder(folderId: string) {
    await this._folders.update((folders) =>
      folders.filter((folder) => folder.id !== folderId)
    );
    this.seleccionarFolder('default');
    this.backup();
    return {
      status: 'success',
      mensaje: 'Se elimino el folder correctamente',
    };
  }

  backup() {
    localStorage.setItem('folders', JSON.stringify(this._folders()));
  }

  inizializarFolders() {
    const storage = localStorage.getItem('folders') || '[]';
    const folders = JSON.parse(storage);

    if (folders.length > 0) {
      this._folders.set(folders);
    }
  }
}
