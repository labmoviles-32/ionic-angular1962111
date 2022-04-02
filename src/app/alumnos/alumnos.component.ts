import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  constructor() { }

  alumnos = [
    {
      "nombre": "Ricardo ", 
      "apellido": "Herrera", 
      "matricula": "Wapo"
    },
    {
      "nombre": "Yulianna", 
      "apellido": "Mares", 
      "matricula": "ABC123"
    },
    {
      "nombre": "Bryan", 
      "apellido": "Castillo", 
      "matricula": "ABC123"
    },
    {
      "nombre": "Josue", 
      "apellido": "Pablo", 
      "matricula": "ABC123"
    },
    {
      "nombre": "Felix", 
      "apellido": "Yahveh", 
      "matricula": "ABC123"
    },
    {
      "nombre": "Aldo Martinez", 
      "apellido": "Ramirez", 
      "matricula": "ABC123"
    },
    {
      "nombre": "Johann", 
      "apellido": "Velázquez", 
      "matricula": "1962111"
    }
  ]

  ngOnInit(): void {
  }

}