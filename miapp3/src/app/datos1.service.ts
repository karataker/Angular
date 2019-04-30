import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Datos1Service {

  constructor() { }

  public mensaje():string{
    return "hola desde datos 1"
  }
}
