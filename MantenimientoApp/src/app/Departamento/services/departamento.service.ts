import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departamento } from '../interface/departamento';
import { Observable, catchError, forkJoin, map, of, pipe } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private apiUrlDepartamentos:string = 'http://localhost:8081';

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


}
