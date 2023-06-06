import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departamento } from '../interface/departamento';
import { Observable, catchError, forkJoin, map, of, pipe } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private apiUrlDepartamentos:string = 'http://localhost:8082';

  constructor(private http: HttpClient) { }

  private getDepartamentosquest(url: string): Observable<Departamento[]>{
      return this.http.get<Departamento[]>(url)
          .pipe(
            catchError( () => of ([]))
          );
  }

  searchDepartamento(term: string): Observable<Departamento[]>{
      const url = `${this.apiUrlDepartamentos}/api/departamentos`;
      return this.getDepartamentosquest(url);
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
