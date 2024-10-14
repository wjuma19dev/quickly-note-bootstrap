import { Injectable, inject } from "@angular/core";
import { ToastButton, ToastController } from "@ionic/angular";

@Injectable({ providedIn: "root" })
export class ToastService {
	private _toastCtrl: ToastController = inject(ToastController);

	async presentToas(
		color:
			| "alert-danger"
			| "alert-success"
			| "alert-primary"
			| "alert-simple-dark"
			| "alert-warning",
		position: "top" | "middle" | "bottom",
		message: string,
		icon?: "trash" | "checkmark-circle-outline",
		buttons?: any,
	) {
		const toas = this._toastCtrl.create({
			message,
			duration: 2000,
			color,
			mode: "ios",
			position,
			icon,
			buttons,
		});
		(await toas).present();
	}
}
