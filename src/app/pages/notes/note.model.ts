import { nanoid } from 'nanoid';

export class Nota {
  public id: string;
  public titulo: string;
  public contenido: string;
  public usuario: string;
  public papelera: boolean;
  public creado: Date;
  public folderId: string;
  public favorito: boolean;

  constructor(
    titulo: string,
    contenido: string,
    creado: Date,
    folderId: string
  ) {
    this.id = nanoid(24);
    this.titulo = titulo;
    this.contenido = contenido;
    this.usuario = '66f4749d67fbf2f917b097ed';
    this.papelera = false;
    this.folderId = folderId;
    this.creado = creado;
    this.favorito = false;
  }
}
