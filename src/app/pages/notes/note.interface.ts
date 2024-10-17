export interface INota {
  id: string;
  usuario: string;
  titulo: string;
  contenido: string;
  creado: Date;
  folderId: string;
  papelera: boolean;
  favorito: boolean;
}
