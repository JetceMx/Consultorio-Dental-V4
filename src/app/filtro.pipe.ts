import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultPosts = [];
    for (const cita of value) {
      if (cita.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(cita);
      };
    };
    return resultPosts;
  }

}
