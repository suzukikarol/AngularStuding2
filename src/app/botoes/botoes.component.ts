import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html',
  styleUrls: ['./botoes.component.css']
})
export class BotoesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isavailable = false
  myFunction(event) {
    if (this.isavailable == false){
      this.isavailable = true
    }else{
      this.isavailable = false
    }
  }

  alerta(event) {
    alert("BOTÃO CLICADO MANO!!!");
  }
}
