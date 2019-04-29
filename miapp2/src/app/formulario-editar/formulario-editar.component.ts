import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { ActivatedRoute } from '@angular/router';
import { LibroRESTService } from '../libro-rest.service';

@Component({
  selector: 'app-formulario-editar',
  templateUrl: './formulario-editar.component.html',
  styleUrls: ['./formulario-editar.component.css']
})
export class FormularioEditarComponent implements OnInit {
libroEditar= new Libro();
 
  constructor(public route:ActivatedRoute,public servicio:LibroRESTService) { 

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.servicio.buscarUno(params.get("titulo")).subscribe((libro)=>{
        this.libroEditar=libro;
      })
    })
  }

}
