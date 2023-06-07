import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, of, pipe } from "rxjs";
import { PaisV2 } from "../interface/paisV2";

@Injectable({providedIn: 'root'})

export class PaisV2Service {

    private apiUrl:string = 'http://localhost:8088';

    constructor(private http: HttpClient) { }

    private getPaisV2Request(url: string): Observable<PaisV2[]>{
        return this.http.get<PaisV2[]>(url)
            .pipe(
              catchError( () => of ([]))
            );
    }



    searchPaisV2(term: string): Observable<PaisV2[]>{
        const url = `${this.apiUrl}/api/pais`;
        return this.getPaisV2Request(url);
    }

    searchPaisV2ById(term:string): Observable<PaisV2 | null>{
        const url = `${this.apiUrl}/api/pais/paisById/${term}`;
        return this.http.get<PaisV2>(url)
        .pipe(

            catchError( () => of(null))
        );
    }

    addPaisV2(paisV2:PaisV2): Observable<any> {
        const url = `${this.apiUrl}/api/pais/add`;
        const headers = { 'content-type': 'application/json'}
        const body=JSON.stringify(paisV2);
        console.log(body)
        return this.http.post(url, body,{'headers':headers})
    }

    updatePaisV2(pais: PaisV2): Observable<any>{
        const url = `${this.apiUrl}/api/pais/updateById/${pais.IdPais}`;
        const headers = { 'content-type': 'application/json'}
        const body=JSON.stringify(pais);
        console.log(body)
        return this.http.put(url, body,{'headers':headers})
    }

    deletePaisV2(id:number): Observable<any>{
        const headers = { 'Access-Control-Allow-Credentials': 'true', 'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS', 'Access-Control-Allow-Headers': '*'}
        const url = `${this.apiUrl}/api/pais/deleteById/${id}`;
        return this.http.delete(url)

    }
}
