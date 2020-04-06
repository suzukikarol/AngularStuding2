import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SearchCepComponent } from './search-cep/search-cep.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MesesComponent } from './meses/meses.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ListaComponent} from './lista/lista.component';
import { BotoesComponent } from './botoes/botoes.component';


const routes: Routes = [
  {path:"raiz", component:HomeComponent},
  {path:"contatus", component:ContactusComponent},
  {path:"cep", component:SearchCepComponent},
  {path:"form", component:FormularioComponent},
  {path:"mes", component:MesesComponent},
  {path:"data", component:NewCmpComponent},
  {path:"lista", component:ListaComponent},
  {path:"botoes", component:BotoesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const
RoutingComponent = [HomeComponent, ContactusComponent];