import { Component } from '@angular/core';
import { PaisV2 } from './interface/paisV2';
import { PaisV2Service } from './service/paisV2.service';

type Funciones = 'Buscar'|'Guardar'|'Editar'

@Component({
  selector: 'app-paisV2',
  templateUrl: './paisV2.component.html',
  styleUrls: [],
})
export class PaisV2Component {
  select: any;
  public m?:PaisV2;
  public paisesV2: PaisV2[] = [];
  public funciones: Funciones[] = ['Buscar', 'Guardar', 'Editar'];
  public selectedFuncion?: Funciones;
  constructor(private paisV2Service: PaisV2Service){}
  ngOnInit(){
    this.selectedFuncion = this.funciones[0];
    let term = ''
    this.paisV2Service.searchPaisV2(term)
    .subscribe(paisesV2 =>{
      this.paisesV2 = paisesV2
    });

  }

  refreshTable(){
    this.selectedFuncion = this.funciones[0];
    this.paisV2Service.searchPaisV2('')
    .subscribe(paisesV2 =>{
      this.paisesV2 = paisesV2
    });
  }

  selectFuncion(funcion:Funciones):void{
    this.selectedFuncion = funcion;
    console.log(funcion);
  }

  addPaisV2($event: any){
    this.select = $event;
    this.paisV2Service.addPaisV2(this.select)
          .subscribe(data =>{
              console.log(data)
              this.refreshTable();

          });
    console.log(this.select);

  }

  searchPaisV2ById(term: string):void{

    this.paisV2Service.searchPaisV2ById(term)
    .subscribe(ms =>{
      this.paisesV2 = [];
      if (ms !=null){
        this.paisesV2.push(ms!);
      }
      console.log(ms);
    });
  }
  // Hace un fill al formulario
  updatePaisesV2($event: any){
    this.m = $event;
    this.selectedFuncion = this.funciones[2];
    console.log(this.m);

  }
  // Hace el put
  updatePais2_2($event: any){
    this.m = $event;
    if (this.m?.IdPais != undefined){
      this.paisV2Service.updatePaisV2(this.m)
        .subscribe(data =>{
          console.log(data)
          this.refreshTable();

        });
    }

  }

  deletePaisV2($event: any){
    this.m = $event
    console.log(this.m);
    if (this.m?.IdPais != undefined){
      this.paisV2Service.deletePaisV2(this.m.IdPais)
        .subscribe(s =>{
          this.refreshTable();
        });
    }else{
      console.log('El id es nulo');
    }

  }
}



