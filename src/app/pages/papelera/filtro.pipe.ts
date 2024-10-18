import { Pipe, PipeTransform } from '@angular/core';
import { INota } from '../notes/note.interface';

@Pipe({
  name: 'papeleraFiltro',
})
export class papeleraFiltroPipe implements PipeTransform {
  transform(notas: INota[], termino: string) {
    termino = termino.trim().toLowerCase();

    if (termino === '') {
      return notas;
    }

    return notas.filter((nota) => nota.titulo.includes(termino));
  }
}
