import { inject, Injectable, InputOptions } from '@angular/core';
import { AlertButton, AlertController, AlertInput } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AlertaService {
  alertCtrl = inject(AlertController);

  async presentAlert(
    header: string,
    subHeader?: string,
    message?: string,
    buttons?: AlertButton[] | string[],
    inputs?: AlertInput[],
    backdropDismiss?: boolean
  ) {
    const alerta = await this.alertCtrl.create({
      header,
      subHeader,
      message,
      buttons,
      inputs,
      backdropDismiss,
      mode: 'md',
    });
    await alerta.present();
  }
}
