import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';
import { ListadoAlumnoComponent } from './listado-alumno/listado-alumno.component';
import { RouterModule } from '@angular/router';
import { DetalleAlumnoComponent } from './detalle-alumno/detalle-alumno.component';

import {HttpClientModule } from '@angular/common/http';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    ListadoAlumnoComponent,
    DetalleAlumnoComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }