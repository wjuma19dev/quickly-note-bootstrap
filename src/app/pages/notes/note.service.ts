import { Injectable, signal } from "@angular/core";
import { INota } from "./note.interface";
import { Nota } from "./note.model";

@Injectable({ providedIn: "root" })
export class NoteService {
	private _notas = signal<INota[]>([]);

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
}
