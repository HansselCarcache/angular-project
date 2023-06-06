import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import {PorDepartamentoPaginaComponent } from './Pages/por-departamento-pagina.component';
import { DepartamentoRoutingModule } from './departamento-routing.module';
import { DepartamentoTableComponent } from './components/departamento-table/departamento-table.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    DepartamentoRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
   PorDepartamentoPaginaComponent,
   DepartamentoTableComponent

  ],
  providers: [],
})
export class DepartamentoModule { }
