import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { NoticiaDetallesComponent } from './noticia-detalles/noticia-detalles.component';
import { ListadoPublicarComponent } from './listado-publicar/listado-publicar.component';
import { FormsModule } from '@angular/forms';
import { NoticiaPublicarDetallesComponent } from './noticia-publicar-detalles/noticia-publicar-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    NoticiaDetallesComponent,
    ListadoPublicarComponent,
    NoticiaPublicarDetallesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
