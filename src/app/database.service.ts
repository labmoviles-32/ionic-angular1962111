import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }


  //GET
  getAlumnos(){
    return this.http.get('https://alumnos-32-default-rtdb.firebaseio.com/alumnos.json')
  }

  getAlumnoDetalle(id: number ) {
    return this.http.get('https://alumnos-32-default-rtdb.firebaseio.com/alumnos'+ id +'.json')
  }

  //POST

  //UPDATE

  //DELETE
}