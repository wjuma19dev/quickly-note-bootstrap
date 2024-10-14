import { Injectable, inject, signal } from "@angular/core";
import { INota } from "./note.interface";
import { Nota } from "./note.model";
import { ToastService } from "src/app/services/toast.service";
import { ToastButton } from "@ionic/angular";

@Injectable({ providedIn: "root" })
export class NoteService {
	private _notas = signal<INota[]>([]);
	private _toastService: ToastService = inject(ToastService);
	private _screenshot!: INota[];
	public notas = this._notas.asReadonly();

	public inicializarNotas() {
		const backup =
			localStorage.getItem("notas") ||
			JSON.stringify([
				{
					id: "1",
					usuario: "1",
					titulo: "Mi primera nota",
					contenido: "Esta es mi primera nota en esta grandiosa app",
					creado: new Date(),
					basurero: false,
				},
				{
					id: "1",
					usuario: "1",
					titulo: "Mi segunda nota",
					contenido: "Esta es mi segunda nota en esta grandiosa app",
					creado: new Date(),
					basurero: false,
				},
				{
					id: "1",
					usuario: "1",
					titulo: "Mi tercera nota",
					contenido: "Esta es mi tercera nota en esta grandiosa app",
					creado: new Date(),
					basurero: false,
				},
			]);
		const notasGuardadas = JSON.parse(backup);
		this._notas.update(() => notasGuardadas);
	}

	public agregar(nota: any) {
		this._notas.update((notas) => [nota, ...notas]);
		localStorage.setItem("notas", JSON.stringify(this._notas()));
	}

	public actualizar(nota: any) {
		this._notas.update((notas) =>
			notas.filter((n) => {
				if (n.id === nota.id) {
					return nota;
				}
				return n;
			}),
		);
		localStorage.setItem("notas", JSON.stringify(this._notas()));
	}

	public eliminar(notaId: string) {
		const buttons: ToastButton[] = [
			{
				text: "Revertir",
				role: "info",
				handler: () => {
					this._notas.set(this._screenshot);
					localStorage.setItem("notas", JSON.stringify(this._notas()));
				},
			},
		];
		this._screenshot = this.notas();
		this._notas.update((notas) => notas.filter((n) => n.id !== notaId));
		localStorage.setItem("notas", JSON.stringify(this._notas()));
		this._toastService.presentToas(
			"alert-simple-dark",
			"top",
			"Nota enviada a la papelera",
			"trash",
			buttons,
		);
	}
}
