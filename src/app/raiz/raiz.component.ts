import { Component, OnInit } from '@angular/core';
import { SqrtPipe } from '../app.sqrt';

@Component({
  selector: 'app-raiz',
  templateUrl: './raiz.component.html',
  styleUrls: ['./raiz.component.css']
})
export class RaizComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeInput(event){
    let item = event.target.value
     let num = Number(item)
     let result = new SqrtPipe().transform(num)
     
     if (num){
       alert("A raiz quadrada de "+num+" é "+result)
     }else{
       alert("Digite um valor válido")
     }
   }

}
