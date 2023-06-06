
import { Component, Input } from '@angular/core';
import { Departamento } from '../../Departamento/interface/departamento';
import { DepartamentoService } from '../../Departamento/services/departamento.service';


type Funciones = 'Buscar'|'Guardar'|'Listar'

@Component({
  selector: 'departamento-por-departamento-pagina',
  templateUrl: './por-departamento-pagina.component.html',
  styles: []
})
export class PorDepartamentoPaginaComponent {

  public departamentos: Departamento[] = [];
  public funciones: Funciones[] = ['Buscar', 'Guardar', 'Listar'];
  public selectedFuncion?: Funciones;
  public selectedDepartamento?: Departamento;

  constructor(private departamentoService: DepartamentoService){}
  ngOnInit(){
    let term = ''
    this.departamentoService.searchDepartamento(term)
    .subscribe(departamentos =>{
      this.departamentos = departamentos
    });
    console.log('term');
  }

  searchDepartamento(funcion: Funciones): void {
    this.selectedFuncion = funcion;
    console.log(funcion);
  }
}
