import { Injectable } from '@angular/core';

//Esto lo tengo en un modulo que se llama mi modulo
@Injectable()
export class Servicio2Service {

  constructor() { }

  public mensaje2():string{
    return "hola desde el servicio2";
  }
}
