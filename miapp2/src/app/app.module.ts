import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioComponent } from './formulario/formulario.component';
import { Routes, RouterModule } from '@angular/router';
import { FormularioEditarComponent } from './formulario-editar/formulario-editar.component';

const rutas: Routes =[
  {path: 'componente1', component:Componente1Component},
  {path: 'formulario', component: FormularioComponent},
  {path: 'formulario-editar/:titulo', component: FormularioEditarComponent},
  {path: '', redirectTo:'/componente1',pathMatch:'full'}];

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    FormularioComponent,
    FormularioEditarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(
      rutas,
      { enableTracing:true }
    )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
