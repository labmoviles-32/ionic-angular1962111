import { Component, OnInit, Input, ɵisListLikeIterable } from '@angular/core';

import { ActionSheetController } from '@ionic/angular';
import { Alumno } from '../alumno';


import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-listado-alumno',
  templateUrl: './listado-alumno.component.html',
  styleUrls: ['./listado-alumno.component.css']
})
export class ListadoAlumnoComponent implements OnInit {

  constructor(private asc: ActionSheetController,
              private db: DatabaseService) { }

  alumnos: Alumno[] = [];
  $alumnos: Alumno[] = [];
  buscarAlumno: string = "";


  async presentActionSheet() {
    const actionSheet = await this.asc.create({
      header: 'Opciones',
      cssClass: 'my-custom-class',
      mode: 'ios',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        }/*,
        handler: () => {
          console.log('Delete clicked');
        }*/
      }, {
        text: 'Compartir',
        icon: 'share',
        data: 10/*,
        handler: () => {
          console.log('Share clicked');
        }*/
      }, {
        text: 'Favoritos',
        icon: 'heart',
        /*handler: () => {
          console.log('Favorite clicked');
        }*/
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  ngOnInit(): void {
    this.db.getAlumnos().subscribe(res=>{
      console.log(res);
      //this.alumnos = res;
      const alumnosRes: any = res;
      const alumnosArray = Object.keys(res).forEach((key:any)=>{
        (this.alumnos).push(alumnosRes[key]);
      })
    });
  }

  deleteAlumno(id:number){
    this.db.deleteAlumno(id).subscribe(res=>{
      console.log(res);
    });

    //window.location.reload();
  }

  esNulo(al:any):boolean{
    if(al != null){
      return true;
    }

    return false;
  
  }

  get buscarAl(): string { //String de busqueda para el filtrado en alumnos
    return this.buscarAlumno;
  }

  set buscarAl(nombre: string) {
    this.buscarAlumno = nombre;

    this.$alumnos = this.buscaAlumno(nombre);

    console.log(this.$alumnos);
  }

  buscaAlumno(filtrarPorNombre: string): Alumno[] {
    filtrarPorNombre = filtrarPorNombre.toLocaleLowerCase();
    return this.alumnos.filter((alumno: Alumno) => alumno.nombre.toLocaleLowerCase().includes(filtrarPorNombre));
  }
  buscar($event: Event) {
    console.log(this.buscarAlumno, "evento");

  }
  

}