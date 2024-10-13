import { Injectable, signal } from "@angular/core";
import { INota } from "./note.interface";

@Injectable({ providedIn: "root" })
export class NoteService {
	private _notas = signal<INota[]>([
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

	public notas = this._notas.asReadonly();
}
