import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { NoticiaDetallesComponent } from './noticia-detalles/noticia-detalles.component';

const routes: Routes = [
  { path: "listado", component: ListadoComponent },
  { path: "detalles/:id", component: NoticiaDetallesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
