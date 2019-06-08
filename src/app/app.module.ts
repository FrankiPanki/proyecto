import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule /*,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA*/} from '@angular/core';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { CizquierdoComponent } from './contenedores/cizquierdo/cizquierdo.component';
import { CderechoComponent } from './contenedores/cderecho/cderecho.component';
import { CarribaComponent } from './contenedores/carriba/carriba.component';
import { InicioComponent } from './inicio/inicio.component';
import { DesarrolloComponent } from './desarrollo/desarrollo.component';
import { CicloideComponent } from './curvas/cicloide/cicloide.component';
import { PlanosComponent } from './multimedia/planos/planos.component';
import { EpicicloideComponent } from './curvas/epicicloide/epicicloide.component';
import { HipocicloideComponent } from './curvas/hipocicloide/hipocicloide.component';
import { SenoComponent } from './curvas/seno/seno.component';
import { CosenoComponent } from './curvas/coseno/coseno.component';
import { CierreComponent } from './cierre/cierre.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    CizquierdoComponent,
    CderechoComponent,
    CarribaComponent,
    InicioComponent,
    DesarrolloComponent,
    CicloideComponent,
    PlanosComponent,
    EpicicloideComponent,
    HipocicloideComponent,
    SenoComponent,
    CosenoComponent,
    CierreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  /*,schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]*/
})
export class AppModule { }
