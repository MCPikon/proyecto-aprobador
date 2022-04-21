import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from '../models/Noticia';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-listado-publicar',
  templateUrl: './listado-publicar.component.html',
  styleUrls: ['./listado-publicar.component.css']
})
export class ListadoPublicarComponent implements OnInit {

  noticias:Noticia[] = {} as Noticia[];

  constructor(private servicio:NoticiasService, private router:Router) { }

  ngOnInit(): void {
    this.servicio.obtenerNoticiasPublicar().subscribe(res => this.noticias = res);
  }

  verDetalles(n:Noticia) {
    this.router.navigate(["detalles-publicar", n.id]);
  }

  verListadoGeneral() {
    this.router.navigate(["listado"]);
  }

}
