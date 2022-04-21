import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from '../models/Noticia';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-noticia-publicar-detalles',
  templateUrl: './noticia-publicar-detalles.component.html',
  styleUrls: ['./noticia-publicar-detalles.component.css']
})
export class NoticiaPublicarDetallesComponent implements OnInit {

  id_noticia:number = 0;
  noticia:Noticia = {} as Noticia;

  constructor(private servicioNoticias:NoticiasService, private activatedRouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id_noticia = Number(this.activatedRouter.snapshot.paramMap.get("id"));
    this.servicioNoticias.obtenerNoticiaPublicarPorId(this.id_noticia).subscribe(res => this.noticia = res);
  }

  volverListadoPublicar() {
    this.router.navigate(["listado-publicar"]);
  }

  devolverAlistado() {
    alert("devolver noticia a la tabla noticias y borrarla de noticiaspublicar");
  }

  publicarNoticia() {
    alert("este botón sería para enviar la noticia directamente a publicar");
  }

}
