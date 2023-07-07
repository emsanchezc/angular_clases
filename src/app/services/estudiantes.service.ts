import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

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

  obtenerEstudiantes(): Observable<any> {
    return this.http.get(this.apiUrl + 'estudiantes', this.httpOption);
  }  

  registrarEstudiante(estudiante: any): Observable<any> {

    return this.http.post(this.apiUrl + 'estudiantes', estudiante, this.httpOption);

  }

}
