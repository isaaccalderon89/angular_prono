import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Tema01DataBindingComponent } from './tema01-data-binding/tema01-data-binding.component';
import { FormsModule } from '@angular/forms';
import { Tema02ComunicacionComponentesComponent } from './tema02-comunicacion-componentes/tema02-comunicacion-componentes.component';
import { SugusComponent } from './tema02-comunicacion-componentes/sugus/sugus.component';
import { Tema03DirectivasComponent } from './tema03-directivas/tema03-directivas.component';
import { BlinkDirective } from './tema03-directivas/blink.directive';
import { ProductoComponent } from './tema02-comunicacion-componentes/producto/producto.component';
import { Tema04ReferenciasComponent } from './tema04-referencias/tema04-referencias.component';
import { Tema05PipesComponent } from './tema05-pipes/tema05-pipes.component';
import { EllipsisPipe } from './tema05-pipes/pipes/ellipsis.pipe';
import { FiltrarPipe } from './tema05-pipes/pipes/filtrar.pipe';


@NgModule({
  declarations: [
    AppComponent,
    Tema01DataBindingComponent,
    Tema02ComunicacionComponentesComponent,
    SugusComponent,
    Tema03DirectivasComponent,
    BlinkDirective,
    ProductoComponent,
    Tema04ReferenciasComponent,
    Tema05PipesComponent,
    EllipsisPipe,
    FiltrarPipe
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
