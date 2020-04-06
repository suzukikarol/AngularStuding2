import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  public persondata = [];

  constructor(private myservice: MyserviceService) {}

  ngOnInit() {
    this.myservice.getData().subscribe((data) => {
      this.persondata = Array.from(Object.keys(data),
     k=>data[k]);
    })
  }

}
