import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Hola1Component } from './hola1/hola1.component';
import { MimoduloModule } from './mimodulo/mimodulo.module';

@NgModule({
  declarations: [
    AppComponent,
    Hola1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MimoduloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
