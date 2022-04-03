import { Component, OnInit, Input, ɵisListLikeIterable } from '@angular/core';

import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  constructor(private db: DatabaseService) { }

  alumnos: any = [];

  ngOnInit(): void {
    this.consultaDBAlumnos()
  }


  @Input() nombreAlumno: string = "";
  @Input() apellidoAlumno: string = "";
  @Input() matriculaAlumno: string = "";


  hola: string = "hola mundo";


  consultaDBAlumnos(){
   this.db.getAlumnos().subscribe(res => {
      console.log(res);
      this.alumnos = res;
    })
  }

  like(): void {
    //dar like a este elemento
    console.log("like!");
  }

  agregarAlumno(): void {
    var nuevoAlumno: any = {
      "nombre": this.nombreAlumno,
      "apellido": this.apellidoAlumno,
      "matricula": this.matriculaAlumno
    }

    //console.log(nuevoAlumno);

    

    this.alumnos.push(nuevoAlumno); //Funcion en TypeScript 
  }
}