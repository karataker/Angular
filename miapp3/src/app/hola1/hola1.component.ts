import { Component, OnInit } from '@angular/core';
import { Datos1Service } from '../datos1.service';
import { Servicio2Service } from '../mimodulo/servicio2.service';

@Component({
  selector: 'app-hola1',
  templateUrl: './hola1.component.html',
  styleUrls: ['./hola1.component.css']
})
export class Hola1Component implements OnInit {

  mensaje:string;
  constructor(public miservicio:Servicio2Service) { }

  ngOnInit() {
    this.mensaje=this.miservicio.mensaje2();
  }

}
