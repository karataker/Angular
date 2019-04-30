import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'app-componente-pipe',
  templateUrl: './componente-pipe.component.html',
  styleUrls: ['./componente-pipe.component.css']
})
export class ComponentePipeComponent implements OnInit {

  fecha:Date=new Date();
  mensaje:String="holas";
  lista:Libro[]=[];
  importe:number=500;
  constructor() { 
    this.lista.push(new Libro("java","pedro",200));
    this.lista.push(new Libro("php","ramocin",500));

  }
 

  ngOnInit() {
  }

}
