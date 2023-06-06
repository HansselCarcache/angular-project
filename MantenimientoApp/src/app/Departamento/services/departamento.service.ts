import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departamento } from '../interface/departamento';
import { Observable, catchError, forkJoin, map, of, pipe } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

<<<<<<< HEAD
  private apiUrlDepartamentos:string = 'http://localhost:8081';
=======
  private apiUrlDepartamentos:string = 'http://localhost:8082';
>>>>>>> e966cc7a2105aabc974150b86f77ca46cfd25cdf

  constructor(private http: HttpClient) { }

  private getDepartamentosquest(url: string): Observable<Departamento[]>{
<<<<<<< HEAD
      
 return this.http.get<Departamento[]>(url)
=======
      return this.http.get<Departamento[]>(url)
>>>>>>> e966cc7a2105aabc974150b86f77ca46cfd25cdf
          .pipe(
            catchError( () => of ([]))
          );
  }

<<<<<<< HEAD

=======
>>>>>>> e966cc7a2105aabc974150b86f77ca46cfd25cdf
  searchDepartamento(term: string): Observable<Departamento[]>{
      const url = `${this.apiUrlDepartamentos}/api/departamentos`;
      return this.getDepartamentosquest(url);
  }

<<<<<<< HEAD

=======
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
>>>>>>> e966cc7a2105aabc974150b86f77ca46cfd25cdf
}
