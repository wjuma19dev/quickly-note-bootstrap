import {
  Component,
  ElementRef,
  inject,
  input,
  output,
  ViewChild,
} from '@angular/core';
import { FolderService, IFolder } from '../folder.service';
import { IonItem, IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-folder-item',
  templateUrl: './folder-item.component.html',
  styleUrls: ['./folder-item.component.scss'],
})
export class FolderItemComponent {
  // Servicios
  private _folderService = inject(FolderService);

  // Propiedades
  public folder = input.required<IFolder>();
  public cerrarSliding = output();

  marcarComoActivo() {
    this._folderService.seleccionarFolder(this.folder().id);
  }

  async borrarFolder() {
    this.cerrarSliding.emit();
    await this._folderService.borrarFolder(this.folder().id);
  }
}
