
import { Component, Input } from '@angular/core';
import { Pais } from '../../Pais/interface/pais';
import { PaisService } from '../../Pais/services/pais.service';


type Funciones = 'Buscar'|'Guardar'

@Component({
  selector: 'pais-por-pais-pagina',
  templateUrl: './por-pais-pagina.component.html',
  styles: []
})
export class PorPaisPaginaComponent {

  public paises: Pais[] = [];
  public funciones: Funciones[] = ['Buscar', 'Guardar'];
  public selectedFuncion?: Funciones;
  constructor(private paisService: PaisService){}
  ngOnInit(){
    let term = ''
    this.paisService.searchPais(term)
    .subscribe(paises =>{
      this.paises = paises
    });
    console.log('term');
  }
  searchPais(funcion:Funciones):void{
    this.selectedFuncion = funcion;
    console.log(funcion);
  }

}
