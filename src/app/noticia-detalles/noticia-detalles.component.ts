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

}
