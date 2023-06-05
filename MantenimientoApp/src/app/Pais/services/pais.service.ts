import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from '../interface/pais';
import { Observable, catchError, map, of, pipe } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrlPais:string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  private getPaisRequest(url: string): Observable<Pais[]>{
      return this.http.get<Pais[]>(url)
          .pipe(
            catchError( () => of ([]))
          );
  }

  searchPais(term: string): Observable<Pais[]>{
      const url = `${this.apiUrlPais}/api/pais`;
      return this.getPaisRequest(url);
  }
}
