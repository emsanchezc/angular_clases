import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private apiUrl = environment.apiUrl;

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + environment.token
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  obtenerCursos(): Observable<any> {
    return this.http.get(this.apiUrl + 'cursos', this.httpOption);
  }  

  registrarCurso(curso: any): Observable<any> {

    return this.http.post(this.apiUrl + 'cursos', curso, this.httpOption);

  }

  consultarCurso(id: number): Observable<any> {
      
      return this.http.get(this.apiUrl + 'cursos/' + id, this.httpOption);
  
  }

  actualizarCurso(id: number, curso: any): Observable<any> {
    return this.http.put(this.apiUrl + 'cursos/' + id, curso, this.httpOption);
  }

  inhabilitarCurso(id: number, curso: any): Observable<any> {
    return this.http.put(this.apiUrl + 'cursos/estado/' + id, curso, this.httpOption);
  }
}
