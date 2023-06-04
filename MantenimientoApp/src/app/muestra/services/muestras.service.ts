import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, of, pipe } from "rxjs";
import { Muestra } from "../interface/muestra";

@Injectable({providedIn: 'root'})
export class MuestrasService {
    private apiUrl:string = 'http://localhost:8080';
    
    constructor(private http: HttpClient) { }

    private getMuestrasRequest(url: string): Observable<Muestra[]>{
        return this.http.get<Muestra[]>(url)
            .pipe(
              catchError( () => of ([]))  
            );
    }

    searchMuestra(term: string): Observable<Muestra[]>{
        const url = `${this.apiUrl}/api/muestras`;
        return this.getMuestrasRequest(url);
    }
}