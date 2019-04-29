import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { MiservicioService } from '../miservicio.service';
import { LibroRESTService } from '../libro-rest.service';
import { Router } from '@angular/router';
import { flatMap } from 'rxjs/operators';


@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  private _lista: Libro[] = [];
  mostrar: string;
  filtroTitulo: string;

  get lista(): Libro[] {
    if (this.filtroTitulo != null && this.filtroTitulo != "") {

      return this._lista.filter((item) => {
        return item.titulo.toLowerCase().startsWith(this.filtroTitulo.toLowerCase());
      });
    } else {
      return this._lista;
    }
  }
  set lista(lista: Libro[]) {
    this._lista = lista;
  }

  constructor(public servicio: LibroRESTService, public router: Router) {

    /*
    this.lista.push(new Libro("Java","cecilio",400));
    this.lista.push(new Libro("php","Matilde",2500)); 
    this.lista.push(new Libro("sql","Midwarino",10)); 
    */
    servicio.buscarTodos().subscribe((datos) => {
      this._lista = datos;
    })


  }

  ngOnInit() {
  }


  borrar(libro: Libro) {
    //   this.servicio.borrar(libro).subscribe((titulo) => {
    //     var borrable = this.lista.filter((e) => {
    //       return e.titulo == titulo;
    //     })[0];
    //     var indice = this.lista.indexOf(borrable);
    //     this.lista.splice(indice, 1);
    //   });
    this.servicio.borrar(libro).pipe(flatMap(() => {

      return this.servicio.buscarTodos();
    })).subscribe((datos) => {
      this.lista = datos as Libro[];
    })
  }

  public editar(libro: Libro): void {
    this.router.navigate(["formulario-editar", libro.titulo]);
  }

  // verFormulario(){
  //   this.libroNuevo=new Libro();
  //   this.mostrar="formulario";
  // }

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
