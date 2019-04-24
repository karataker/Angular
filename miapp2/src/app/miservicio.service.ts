import { Injectable } from '@angular/core';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {

  lista:Libro[]=[];

  constructor() { 
    this.lista.push(new Libro("Java2","cecilio",400));
    this.lista.push(new Libro("php2","Matilde",2500)); 
    this.lista.push(new Libro("sql2","Midwarino",10)); 
  }

  public buscarTodos():Libro[]{
    return this.lista;
  }

  public insertar(libro:Libro):void{
    this.lista.push(libro);
  }

  public borrar(libro:Libro):void{
    var indice=this.lista.indexOf(libro);
    this.lista.splice(indice,1);
  }
}
