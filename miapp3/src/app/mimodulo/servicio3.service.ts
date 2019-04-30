import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Servicio3Service {

  constructor() { }

  public mensaje3():string{
    return "hola desde el servicio3";
  }
}
