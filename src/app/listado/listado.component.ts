import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from '../models/Noticia';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  noticias:Noticia[] = {} as Noticia[];

  constructor(private servicio:NoticiasService, private router:Router) { }

  ngOnInit(): void {
    this.servicio.obtenerNoticias().subscribe(res => this.noticias = res);
  }

  verDetalles(n:Noticia) {
    this.router.navigate(["detalles", n.id]);
  }

  verListadoPublicar() {
    this.router.navigate(["listado-publicar"]);
  }

}
