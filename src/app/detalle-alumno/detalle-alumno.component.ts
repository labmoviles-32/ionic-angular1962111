import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { DatabaseService } from '../database.service';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.component.html',
  styleUrls: ['./detalle-alumno.component.css']
})
export class DetalleAlumnoComponent implements OnInit {

  constructor(private ruta: ActivatedRoute,
              private db: DatabaseService,
              private modal: ModalController) { }

  al: any;
  
  id: number = this.ruta.snapshot.params['index'];

  ngOnInit(): void {
    //var matricula: string = this.ruta.snapshot.params['matricula'];
    //this.al = this.getAlumno(matricula);
    this.db.getAlumnoDetalle(this.id).subscribe(res => {
      this.al = res;
    })
    console.log(this.al);
  }

 

  alumnos:any = [];

  modAlumno(){
    console.log(this.al)
    this.db.updateAlumno(this.id,this.al).subscribe(res=>{
      console.log(res);
    })

    this.editado = !this.editado;
    this.modal.dismiss();
  }

  closeModal(){
    this.modal.dismiss();
  }

  editado = false;

}