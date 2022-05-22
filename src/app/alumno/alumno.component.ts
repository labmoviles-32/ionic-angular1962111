import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  constructor() { }

  alumnos = [
    {
      "nombre":"Raul",
      "apellido": "Sanchez",
      "matricula": "12345678"
    },
    {
      "nombre":"Felix",
      "apellido": "Alanis",
      "matricula": "1947480"
    },
    {
      "nombre":"Josue",
      "apellido": "Reyes",
      "matricula": "1876321"
    },
    {
      "nombre":"Johann",
      "apellido": "Velazquez",
      "matricula": "1962111"
    },
    {
      "nombre":"Maria",
      "apellido": "Castillo",
      "matricula": "2087341"
    },
    {
      "nombre":"Sandra",
      "apellido": "Antonio",
      "matricula": "1523468"
    },
    {
      "nombre":"Juan",
      "apellido": "Velázquez",
      "matricula": "19874652"
    }
  ]

  ngOnInit(): void {
  }

  @Input() nombreAlumno: string = "";
  @Input() apellidoAlumno: string = "";
  @Input() matriculaAlumno: string = "";
 
  agregarAlumno(): void{
    var nuevoAlumno: any={
      //Propiedades del objeto
      "nombre": this.nombreAlumno,
      "apellido": this.apellidoAlumno,
      "matricula": this.matriculaAlumno

    }
    this.alumnos.push(nuevoAlumno); //Agregamos al alumno al arreglo de objetos
  }

}