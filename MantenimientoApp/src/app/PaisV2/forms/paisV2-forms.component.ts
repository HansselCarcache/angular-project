import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PaisV2 } from "../interface/paisV2";
import { PaisV2Service } from "../service/paisV2.service";

@Component({
  selector: 'paisV2-form',
  templateUrl: './paisV2-forms.component.html',
  styles:[
    ]
})
export class PaisV2FormComponent{
    @Input()
    public paisV2Recibido?: PaisV2;
    public id?: number ;
    public descripcion?: string ;
    public estado?: number
    public paisesV2: PaisV2 = {
        IdPais: this.id,
        descripcion: this.descripcion,
        estado: this.estado
    };
    @Output() messageEvent  = new EventEmitter<any>();
    @Output() updateEvent  = new EventEmitter<any>();

    submitted = false;
    constructor(private paisV2Service: PaisV2Service){}
    ngOnInit(){
        if (this.paisV2Recibido?.IdPais != undefined){
            console.log('Entre');
            this.paisesV2.IdPais = this.paisV2Recibido.IdPais;
            this.paisesV2.descripcion = this.paisV2Recibido.descripcion;
            this.paisesV2.estado = this.paisV2Recibido.estado;
        }
    }
     onSubmit() {
        if (this.paisesV2.IdPais == undefined){
            // this.muestras.descripcion = this.descripcion;
            // this.muestras.estado = this.estado;
            this.submitted = true;
            // console.log(this.submitted);
            // console.log(this.muestras);
            this.messageEvent.emit(this.paisesV2);
        }else{
            this.submitted = true;
            this.updateEvent.emit(this.paisesV2)
        }


     }
}
