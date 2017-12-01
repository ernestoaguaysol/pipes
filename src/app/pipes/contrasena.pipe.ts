import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): string {

    if (activar) {
      // primera solucion
        // for (let i = 0; i < value.length; i++) {
        //   value = value.replace(value.charAt(i), '*');
        // }

        // segunda solucion
        value = value.replace(/./g, '*');
    }
    return value;

    // solucion en una sola linea
    // return (!activar ? value : value.replace(/./g, "*"));
  }

}
