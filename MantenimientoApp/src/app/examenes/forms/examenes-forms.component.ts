import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Examenes } from "../interface/examenes";
import { ExamenesService } from "../services/examenes.service";

@Component({
    selector: 'examenes-form',
    templateUrl: './examenes-forms.component.html',
    styles:[

    ]
})

export class ExamenesFormComponent{
    @Input()
    public examenesRecibida?: Examenes;
    public id?: number ;
    public idAreaLabServicio?: number;
    public idMetodologia?: number;
    public idCategoriaExamenes?: number;
    public idTipoMuestra?: number;
    public idUnidadMedidas?: number;
    public idTipoResultado?: number;
    public descripcion?: string;
    public descripcionCorta?: string;
    public lisCode?: string;
    public conteo?: string;
    public confidencial?: string;
    public calculado?: string;
    public estado?: number
    public examenes: Examenes = {
        idExamen: this.id,
        idAreaLabServicio: this.idAreaLabServicio,
        idMetodologia: this.idMetodologia,
        idCategoriaExamenes: this.idCategoriaExamenes,
        idTipoMuestra: this.idTipoMuestra,
        idUnidadMedidas: this.idUnidadMedidas,
        idTipoResultado: this.idTipoResultado,
        descripcion: this.descripcion,
        descripcionCorta: this.descripcionCorta,
        lisCode: this.lisCode,
        conteo: this.conteo,
        confidencial: this.confidencial,
        calculado: this.calculado,
        estado: this.estado
    };
    @Output() messageEvent  = new EventEmitter<any>();
    @Output() updateEvent  = new EventEmitter<any>();

    submitted = false;
    constructor(private examenesService: ExamenesService){}
    ngOnInit(){
        if (this.examenesRecibida?.idExamen != undefined){
            console.log('Entre');
            this.examenes.idExamen = this.examenesRecibida.idExamen;
            this.examenes.idAreaLabServicio = this.examenesRecibida.idAreaLabServicio;
            this.examenes.idMetodologia = this.examenesRecibida.idMetodologia;
            this.examenes.idCategoriaExamenes = this.examenesRecibida.idCategoriaExamenes;
            this.examenes.idTipoMuestra = this.examenesRecibida.idTipoMuestra;
            this.examenes.idUnidadMedidas = this.examenesRecibida.idUnidadMedidas;
            this.examenes.idTipoResultado = this.examenesRecibida.idTipoResultado;
            this.examenes.descripcionCorta = this.examenesRecibida.descripcionCorta;
            this.examenes.descripcion = this.examenesRecibida.descripcion;
            this.examenes.lisCode = this.examenesRecibida.lisCode;
            this.examenes.conteo = this.examenesRecibida.conteo;
            this.examenes.confidencial = this.examenesRecibida.confidencial;
            this.examenes.calculado = this.examenesRecibida.calculado;
            this.examenes.estado = this.examenesRecibida.estado;
        }
    }

    onSubmit() { 
        if (this.examenes.idExamen == undefined){
            // this.examenes.descripcion = this.descripcion;
            // this.examenes.estado = this.estado;
            this.submitted = true;
            // console.log(this.submitted);
            // console.log(this.examenes);
            this.messageEvent.emit(this.examenes);
        }else{
            this.submitted = true;
            this.updateEvent.emit(this.examenes)
        }
        
       
    }
}