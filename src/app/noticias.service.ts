import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from './models/Noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  ruta_server = "/server/";
  constructor(private http:HttpClient) { }

  obtenerNoticias():Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.ruta_server + 'obtenerNoticias.php');
  }

  obtenerNoticiasPublicar():Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.ruta_server + 'obtenerNoticiasPublicar.php');
  }

  obtenerNoticiaPorId(id:number):Observable<Noticia> {
    return this.http.get<Noticia>(this.ruta_server + 'obtenerNoticiaPorId.php?id=' + id);
  }

  insertarNoticia(n:Noticia):Observable<string> {
    return this.http.post<string>(this.ruta_server + "insertarNoticia.php", n);
  }

  insertarNoticiaPublicar(n:Noticia):Observable<string> {
    return this.http.post<string>(this.ruta_server + "insertarNoticiaPublicar.php", n);
  }

  eliminarNoticia(id:number):Observable<string> {
    return this.http.get<string>(this.ruta_server + "eliminarNoticia.php?id=" + id);
  }

  eliminarNoticiaPublicar(id:number):Observable<string> {
    return this.http.get<string>(this.ruta_server + "eliminarNoticiaPublicar.php?id=" + id);
  }

  obtenerNoticiaPublicarPorId(id:number):Observable<Noticia> {
    return this.http.get<Noticia>(this.ruta_server + 'obtenerNoticiaPublicarPorId.php?id=' + id);
  }

  postearNoticiaTwitter(n:Noticia):Observable<string> {
    return this.http.post<string>(this.ruta_server + "postearNoticiaTwitter.php", n);
  }

}
