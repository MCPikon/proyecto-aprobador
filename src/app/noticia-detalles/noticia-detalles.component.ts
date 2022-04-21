import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from '../models/Noticia';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-noticia-detalles',
  templateUrl: './noticia-detalles.component.html',
  styleUrls: ['./noticia-detalles.component.css']
})
export class NoticiaDetallesComponent implements OnInit {

  id_noticia:number = 0;
  noticia:Noticia = {} as Noticia;

  constructor(private servicioNoticias:NoticiasService, private activatedRouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id_noticia = Number(this.activatedRouter.snapshot.paramMap.get("id"));
    this.servicioNoticias.obtenerNoticiaPorId(this.id_noticia).subscribe(res => this.noticia = res);
  }

  volverListado() {
    this.router.navigate(["listado"]);
  }

  aprobarNoticia() {
    this.servicioNoticias.insertarNoticia(this.noticia).subscribe(res => (res == "ok")?this.aprobarOk():alert("no se pudo aprobar la noticia"));
  }

  aprobarOk() {
    this.servicioNoticias.eliminarNoticia(this.noticia.id).subscribe(res => (res == "ok")?this.deleteOk():alert("no se pudo eliminar la noticia"));
    alert("noticia aprobada correctamente, volviendo al listado...");
    this.router.navigate(['listado']);
  }

  deleteNoticia() {
    if(confirm("¿Seguro que quieres eliminar la noticia?")) {
      this.servicioNoticias.eliminarNoticia(this.noticia.id).subscribe(res => (res == "ok")?this.deleteOk():alert("no se pudo eliminar la noticia"));
    }
  }

  deleteOk() {
    alert("noticia eliminada correctamente, volviendo al listado...");
    this.router.navigate(['listado']);
  }

}
