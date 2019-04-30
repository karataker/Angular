import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Servicio2Service } from './servicio2.service';
import { Servicio3Service } from './servicio3.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[Servicio2Service,Servicio3Service]
})
export class MimoduloModule { }
