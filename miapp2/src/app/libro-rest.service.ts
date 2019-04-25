import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from './libro';
import { promise } from 'protractor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroRESTService {

  constructor(private http: HttpClient) { }

  // //es una peticion ajax
  // buscarTodos(){
  //   var lista:Libro[]=[];
  //   //hago una peticion ajax // asincrona se ejecutara en un futuro
  //   this.http.get<Libro>("http://localhost:3000/libros").subscribe((datos)=>{
  //     //imprimira los datos
  //     console.log(datos);
  //     //asignara la variable a los datos
  //     lista=datos as Libro[];
  //   })
  //   //tiene un array vacio
  //   return lista;
  // }

  buscarTodos(): Observable<Libro[]> {

    return this.http.get<Libro[]>("http://localhost:3000/libros");
  }

  insertar(libro:Libro):Observable<Libro>{
    return this.http.post<Libro>("http://localhost:3000/libros",libro);
  }

  borrar(libro:Libro):Observable<Libro>{
    return this.http.delete<Libro>("http://localhost:3000/libros");
  }
}
