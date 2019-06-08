import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InfoComponent} from './info/info.component';
import {InicioComponent} from './inicio/inicio.component';
import {DesarrolloComponent} from './desarrollo/desarrollo.component';
import {CierreComponent} from './cierre/cierre.component';

const routes: Routes = [
  {path: 'info', component: InfoComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'desarrollo', component: DesarrolloComponent},
  {path: 'cierre', component: CierreComponent},
  {path: '', component: InfoComponent, pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
