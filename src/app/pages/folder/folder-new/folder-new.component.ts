import { Component, inject } from '@angular/core';
import { AlertButton, AlertInput } from '@ionic/angular';
import { FolderService } from '../folder.service';

@Component({
  selector: 'app-folder-new',
  templateUrl: './folder-new.component.html',
  styleUrls: ['./folder-new.component.scss'],
})
export class FolderNewComponent {
  // Servicios
  private _folderService = inject(FolderService);

  public alertButtons: AlertButton[] = [
    {
      text: 'Cancelar',
      role: 'cancel',
      cssClass: 'btn btn-dark',
      // handler: () => {
      //   // console.log('Alert canceled');
      // },
    },
    {
      text: 'Agregar',
      cssClass: 'btn btn-morado',
      role: 'confirm',
      handler: async (e) => {
        if (this._folderService.folders().length >= 5) {
          alert('Hazte premium');
          // TODO Mostrar pantalla para hacerte premium aqui
          return;
        }

        const folder = e[0].trim().toLowerCase();
        const result = await this._folderService.agregar(folder);
      },
    },
  ];

  public alertInput: AlertInput[] = [
    {
      placeholder: 'Ej: personal',
      type: 'text',
    },
  ];

  setResult(ev: any) {}
}
