import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from '../interface/pais';
import { Observable, catchError, forkJoin, map, of, pipe } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrlPais:string = 'http://localhost:8086';

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

  // getPaisesById(idPais: number[]): Observable<(Pais | null)[]> {
  //   const url = `${this.apiUrlPais}/api/pais`;
  //   const requests: Observable<Pais | null>[] = [];

  //   idPais.forEach(id => {
  //     const request = this.http.get<Pais>(url.replace('{id}', id.toString())).pipe(        catchError(() => of(null))
  //     );
  //     requests.push(request);
  //   });

  //   return forkJoin(requests);
  // }
}
