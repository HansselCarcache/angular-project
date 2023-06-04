import { Component } from '@angular/core';
import { Muestra } from './interface/muestra';
import { MuestrasService } from './services/muestras.service';

type Funciones = 'Buscar'|'Guardar'

@Component({
  selector: 'app-muestra',
  templateUrl: './muestra.component.html',
  styleUrls: ['./muestra.component.css']
})
export class MuestraComponent {
  public muestras: Muestra[] = [];
  public funciones: Funciones[] = ['Buscar', 'Guardar'];
  public selectedFuncion?: Funciones;
  constructor(private muestraService: MuestrasService){}
  ngOnInit(){
    let term = ''
    this.muestraService.searchMuestra(term)
    .subscribe(muestras =>{
      this.muestras = muestras
    });
    console.log('term');
  }
  searchMuestra(funcion:Funciones):void{
    this.selectedFuncion = funcion;
    console.log(funcion);
  }
  }
  

