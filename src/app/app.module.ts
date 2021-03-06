//imports default
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rotas
import { AppRoutingModule, RoutingComponent } from './app-routing.module';

//components criados
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { MesesComponent } from './meses/meses.component';
import { RaizComponent } from './raiz/raiz.component';
import { SearchCepComponent } from './search-cep/search-cep.component';
//pipes
import { SqrtPipe } from './app.sqrt';
import { CapitalizePipe } from './capitalize.pipe';

//services
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';

//forms
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';
import { BotoesComponent } from './botoes/botoes.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { NavegationComponent } from './navegation/navegation.component';

@NgModule({
  declarations: [
    SqrtPipe,
    AppComponent,
    RaizComponent,
    CapitalizePipe,
    NewCmpComponent,
    RoutingComponent,
    SearchCepComponent,
    FormularioComponent,
    MesesComponent,
    ListaComponent,
    BotoesComponent,
    FooterComponent,
    NavegationComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
