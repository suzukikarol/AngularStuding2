import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  bemvindo = "Bem vindo ao calculo de Raiz"

  todaydate;
  constructor(private myservice:MyserviceService) { }

  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
  }

}
