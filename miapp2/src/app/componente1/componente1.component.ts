import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { MiservicioService } from '../miservicio.service';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  lista:Libro[]=[];
  libroNuevo=new Libro();
  mostrar:string;
  filtroTitulo:string;

  constructor(public servicio:MiservicioService) { 
  this.mostrar="lista";
  /*
  this.lista.push(new Libro("Java","cecilio",400));
  this.lista.push(new Libro("php","Matilde",2500)); 
  this.lista.push(new Libro("sql","Midwarino",10)); 
  */
    this.lista=servicio.buscarTodos();
  }

  ngOnInit() {
  }

  nuevo(){
    this.servicio.insertar(this.libroNuevo);
    this.libroNuevo=new Libro();
    this.mostrar="lista";
  }
  borrar(libro:Libro){
    var resultado=confirm("realmente quieres borrar");
    console.log(resultado);
    this.servicio.borrar(libro);
  }
  verFormulario(){
    this.libroNuevo=new Libro();
    this.mostrar="formulario";
  }

  filtrar():void {
    
    //console.log(this.lista);
    //filter es una funcion de orden superior
    //recive como parametro otra funcion (predicado)
    //predicado es una function que devuelve verdadero o falso
    if(this.filtroTitulo!=""){
      var nuevaLista=this.lista.filter((item)=>{    //usamos una funcion flecha
        return item.titulo.startsWith(this.filtroTitulo);
    });
     this.lista=nuevaLista;
    }else{
      this.lista=this.servicio.buscarTodos();
    }

  }
}
