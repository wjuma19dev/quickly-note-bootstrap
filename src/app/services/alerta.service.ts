import { inject, Injectable } from '@angular/core';
import { AlertButton, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AlertaService {
  alertCtrl = inject(AlertController);

  async presentAlert(
    header: string,
    subHeader: string,
    message: string,
    buttons?: AlertButton[]
  ) {
    const alerta = await this.alertCtrl.create({
      header,
      subHeader,
      message,
      buttons,
      backdropDismiss: false,
      mode: 'md',
    });
    await alerta.present();
  }
}
