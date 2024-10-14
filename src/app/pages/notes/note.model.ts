import { nanoid } from "nanoid";

export class Nota {
	public id: string;
	public titulo: string;
	public contenido: string;
	public usuario: string;
	public basurero: boolean;
	public creado: Date;

	constructor(titulo: string, contenido: string, creado: Date) {
		this.id = nanoid(24);
		this.titulo = titulo;
		this.contenido = contenido;
		this.usuario = "66f4749d67fbf2f917b097ed";
		this.basurero = false;
		this.creado = creado;
	}
}
