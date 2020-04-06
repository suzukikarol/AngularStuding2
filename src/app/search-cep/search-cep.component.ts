import { Component, OnInit } from '@angular/core';
import { MycepService } from '../mycep.service';

@Component({
  selector: 'app-search-cep',
  templateUrl: './search-cep.component.html',
  styleUrls: ['./search-cep.component.css']
})
export class SearchCepComponent implements OnInit {

 cepDigitado:any;
 logradouro:any;

  constructor(private mycepservice:MycepService) { }

  ngOnInit(): void {
  }

  salvarCep(event){
    this.cepDigitado = event.target.value;
  }

  buscarCep(){
    let cep;
    this.mycepservice.getCep(this.cepDigitado).subscribe(
      (data) => {
        cep = new Object(data)
        this.logradouro = cep.logradouro
      }
    )
  }
}
