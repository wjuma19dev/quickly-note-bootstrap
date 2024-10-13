import { nanoid } from "nanoid";

export class Nota {
	private id: string;
	private usuario: string;
	private basurero: boolean;

	constructor(
		private titulo: string,
		private contenido: string,
		private creado: Date,
	) {
		this.id = nanoid(24);
		this.usuario = "66f4749d67fbf2f917b097ed";
		this.basurero = false;
	}
}
