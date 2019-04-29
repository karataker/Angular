import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { LibroRESTService } from '../libro-rest.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

 
  libroNuevo=new Libro();
  constructor(public servicio:LibroRESTService,public router:Router) { }

  ngOnInit() {
  }
  nuevo(){
    this.servicio.insertar(this.libroNuevo).subscribe((libro)=>{
      console.log("Has insertado");
      this.router.navigate(["componente1"]);
    });  
  }
}
