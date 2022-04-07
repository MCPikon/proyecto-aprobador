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

  obtenerNoticiaPorId(id:number):Observable<Noticia> {
    return this.http.get<Noticia>(this.ruta_server + 'obtenerNoticiaPorId.php?id=' + id);
  }

  eliminarNoticia(id:number):Observable<string> {
    return this.http.get<string>(this.ruta_server + "eliminarNoticia.php?id=" + id);
  }

}
