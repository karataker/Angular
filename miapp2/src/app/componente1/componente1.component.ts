import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { MiservicioService } from '../miservicio.service';
import { LibroRESTService } from '../libro-rest.service';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  private _lista:Libro[]=[];
  libroNuevo=new Libro();
  mostrar:string;
  filtroTitulo:string;

  get lista():Libro[]{
    if(this.filtroTitulo!=null && this.filtroTitulo!=""){
   
    return this._lista.filter((item)=>{
      return item.titulo.toLowerCase().startsWith(this.filtroTitulo.toLowerCase());
    });
  }else{
    return this._lista;
  }
}
set lista(lista:Libro[]){
  this._lista=lista;
}

  constructor(public servicio:LibroRESTService) { 
  this.mostrar="lista";
  /*
  this.lista.push(new Libro("Java","cecilio",400));
  this.lista.push(new Libro("php","Matilde",2500)); 
  this.lista.push(new Libro("sql","Midwarino",10)); 
  */
    servicio.buscarTodos().subscribe((datos)=>{
    this._lista=datos;
    })

  
  }

  ngOnInit() {
  }

   nuevo(){
     this.servicio.insertar(this.libroNuevo).subscribe((libro)=>{
       this.lista.push(libro);
       this.mostrar="lista";
     });  
   }
  // borrar(libro:Libro){
  //   var resultado=confirm("realmente quieres borrar");
  //   console.log(resultado);
  //   this.servicio.borrar(libro);
  // }
  verFormulario(){
    this.libroNuevo=new Libro();
    this.mostrar="formulario";
  }

  // filtrar():void {
    
  //   //console.log(this.lista);
  //   //filter es una funcion de orden superior
  //   //recive como parametro otra funcion (predicado)
  //   //predicado es una function que devuelve verdadero o falso
  //   if(this.filtroTitulo!=""){
  //     var nuevaLista=this.lista.filter((item)=>{    //usamos una funcion flecha
  //       return item.titulo.startsWith(this.filtroTitulo);
  //   });
  //    this._lista=nuevaLista;
  //   }else{
  //     this._lista=this.servicio.buscarTodos();
  //   }

  // }
}
