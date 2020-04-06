import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-meses',
  templateUrl: './meses.component.html',
  styleUrls: ['./meses.component.css']
})
export class MesesComponent implements OnInit {

  todaydate;

  constructor(private myservice: MyserviceService) {}

  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
  }

  months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]

  changemonths(event){
    alert("Changed month from the "+event.target.value)
  }
}
