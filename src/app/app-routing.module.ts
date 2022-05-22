import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './alumno/alumno.component';
import { DetalleAlumnoComponent } from './detalle-alumno/detalle-alumno.component';

import { ListadoAlumnoComponent } from './listado-alumno/listado-alumno.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  {path: '', component: ListadoAlumnoComponent},
  {path: 'alumno', component: ListadoAlumnoComponent},
  {path: 'tarjetas',component: AlumnoComponent},
  {path: 'detalle/:index', component: DetalleAlumnoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }