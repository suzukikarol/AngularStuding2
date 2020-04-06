import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  componentproperty;
  emailid;
  formdata;

  constructor() { }

  ngOnInit(){
    this.formdata = new FormGroup({
      emailid : new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl("",this.passwordvalidation)
    });
  }
  passwordvalidation(formcontrol){
    if (formcontrol.value.length < 10){
      return {"passwd":true}
    }
  }

  onClickSubmit(data){
    this.emailid = data.emailid
  }

}
