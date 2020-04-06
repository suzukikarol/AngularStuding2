import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value:any): any {
    let input = value
    .toLowerCase()
    .split(" ")
    .map(function(conteudo){
      return conteudo.charAt(0).toUpperCase() + conteudo.substr(1)
      //caracter no , o carac na string na primeira posição
    })
    .join(" ")//ele junta o array numa string só com o espaçõ que separou no inicio
    return input
  }

}
