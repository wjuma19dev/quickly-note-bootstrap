import { Injectable, OnInit, computed, inject, signal } from '@angular/core';
import { INota } from './note.interface';
import { Nota } from './note.model';
import { ToastService } from 'src/app/services/toast.service';
import { ToastButton } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class NoteService {
  // Servicios
  private _toastService: ToastService = inject(ToastService);

  // Propiedades
  private _notas = signal<INota[]>([]);
  public notas = this._notas.asReadonly();
  public logNotasPapelera = computed<number>(
    () => this._notas().filter((nota) => nota.papelera).length
  );
  public logNotasFavorito = computed<number>(
    () => this._notas().filter((nota) => nota.favorito && !nota.papelera).length
  );

  public inicializarNotas() {
    const backup =
      localStorage.getItem('notas') ||
      JSON.stringify([
        {
          id: '1',
          usuario: '1',
          titulo: 'Mi primera nota',
          contenido: 'Esta es mi primera nota en esta grandiosa app',
          creado: new Date(),
          folderId: 'default',
          papelera: false,
          favorito: false,
        },
        {
          id: '2',
          usuario: '1',
          titulo: 'Mi segunda nota',
          contenido: 'Esta es mi segunda nota en esta grandiosa app',
          creado: new Date(),
          folderId: 'default',
          papelera: false,
          favorito: false,
        },
        {
          id: '3',
          usuario: '1',
          titulo: 'Mi tercera nota',
          contenido: 'Esta es mi tercera nota en esta grandiosa app',
          creado: new Date(),
          folderId: 'default',
          papelera: false,
          favorito: false,
        },
      ]);
    const notasGuardadas = JSON.parse(backup);
    this._notas.update(() => notasGuardadas);
  }

  public agregar(nota: INota) {
    this._notas.update((notas) => [nota, ...notas]);
    this.guardarNotasEnLocalStorage();
  }

  public actualizar(nota: any) {
    this._notas.update((notas) =>
      notas.filter((n) => {
        if (n.id === nota.id) {
          return nota;
        }
        return n;
      })
    );
    this.guardarNotasEnLocalStorage();
  }

  // ENVIAR UNA NOTA A LA PAPELERA DE RECICLAJE
  public eliminar(notaId: string) {
    this._notas.update((notas) => notas.filter((n) => n.id !== notaId));
    this.guardarNotasEnLocalStorage();
  }

  public enviarAPapelera(notaId: string) {
    const buttons: ToastButton[] = [
      {
        text: 'Revertir',
        handler: () => {
          this.restaurar(notaId);
        },
      },
    ];

    // Enviar a papelera
    this._notas.update((notas) =>
      notas.filter((n) => {
        if (n.id === notaId) {
          n.papelera = true;
        }
        return n;
      })
    );

    this.guardarNotasEnLocalStorage();
    this._toastService.presentToas(
      'alert-simple-dark',
      'bottom',
      'Nota enviada a la papelera',
      'trash',
      buttons
    );
  }

  public restaurar(notaId: string) {
    this._notas.update((notas) =>
      notas.filter((n) => {
        if (n.id === notaId) {
          n.papelera = false;
        }
        return n;
      })
    );
    this.guardarNotasEnLocalStorage();
    this._toastService.presentToas(
      'alert-simple-dark',
      'bottom',
      'Nota restaurada correctamente',
      'checkmark-circle-outline'
    );
  }

  public enviarAFavoritos(notaId: string) {
    this._notas.update((notas) =>
      notas.filter((n) => {
        if (n.id === notaId) {
          if (n.favorito) {
            this.mostrarFavoritoALerta('Se elimino de favorito.');
          } else {
            this.mostrarFavoritoALerta('Se agrego a favorito.');
          }
          n.favorito = !n.favorito;
        }
        return n;
      })
    );
    this.guardarNotasEnLocalStorage();
  }

  consultarNotaEnFavorito(notaId: string) {
    return this._notas().find((n) => n.id === notaId);
  }

  // TODO este metodo es para eliminar una nota de favoritos, es totalmente opcional
  eliminarNotaDeFavoritos(notaId: string) {
    this._notas.update((notas) =>
      notas.filter((n) => {
        if (n.id === notaId) {
          n.favorito = false;
        }
        return n;
      })
    );
    this.guardarNotasEnLocalStorage();
  }

  guardarNotasEnLocalStorage() {
    localStorage.setItem('notas', JSON.stringify(this._notas()));
  }

  mostrarFavoritoALerta(mensaje: string) {
    this._toastService.presentToas('alert-simple-dark', 'bottom', mensaje);
  }
}
