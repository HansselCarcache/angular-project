import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorDepartamentoPaginaComponent } from "./Pages/por-departamento-pagina.component"

const routes: Routes=[

  {
    path:'por-departamento',
    component:PorDepartamentoPaginaComponent
  }


]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class DepartamentoRoutingModule { }
