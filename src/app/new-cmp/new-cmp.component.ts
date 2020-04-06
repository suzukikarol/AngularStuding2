import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  newcomponent = "Componente que exibe horário e data"
  todaydate;
  constructor(private myservice:MyserviceService) { }

  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
  }

}
