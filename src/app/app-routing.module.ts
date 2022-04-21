import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPublicarComponent } from './listado-publicar/listado-publicar.component';
import { ListadoComponent } from './listado/listado.component';
import { NoticiaDetallesComponent } from './noticia-detalles/noticia-detalles.component';
import { NoticiaPublicarDetallesComponent } from './noticia-publicar-detalles/noticia-publicar-detalles.component';

const routes: Routes = [
  { path: "listado", component: ListadoComponent },
  { path: "detalles/:id", component: NoticiaDetallesComponent },
  { path: "listado-publicar", component: ListadoPublicarComponent },
  { path: "detalles-publicar/:id", component: NoticiaPublicarDetallesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
