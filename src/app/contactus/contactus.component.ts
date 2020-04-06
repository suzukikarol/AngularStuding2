import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
 
  saudacao="BEM VINDO AO CONTATO !"

  value:any;
  empty:boolean = true;
  number:number =null;
  recebeValor(event){
    let result = event.target.value
    let valor = String(result) // tranformar em number
    if (result=="") {
      this.empty=true
    }else{
      this.empty=false
      if (result!=valor) {
      }else{
        this.value=event.target.value
      }
    }
  }

  todaydate;
  constructor(private myservice:MyserviceService) { }
  
  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
  }

}
