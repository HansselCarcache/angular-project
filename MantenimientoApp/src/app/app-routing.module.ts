import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

const routes: Routes= [
  // {
  //   path: 'home',
  //   component: HomePageComponent
  // },
  {
    path:'about',
    component: AboutPageComponent
  },
  {
    path:'contact',
    component: ContactPageComponent
  },
  // {
  //   path:'pais',
  //   loadChildren: () => import('./Pais/pais.module').then(m => m.PaisModule)
  // },
  {
    path:'muestra',
    loadChildren: () => import('./muestra/muestra.module').then(m => m.MuestraModule)
  },
  //    {
  //   path: 'departamento',
  //   loadChildren: () => import('./Departamento/departamento.module').then(m => m.DepartamentoModule)
  //  },
  {
    path: 'departamentoV2',
    loadChildren: () => import('./departamentoV2/departamentoV2.module').then(m => m.DepartamentoV2Module)
  },
  {
    path: 'paciente',
    loadChildren: () => import('./paciente/paciente.module').then(m => m.PacienteModule)
  },
  {
    path: 'valores',
    loadChildren: () => import('./valores/valores.module').then(m => m.ValoresModule)
  },
  {
    path: 'examenes',
    loadChildren: () => import('./examenes/examenes.module').then(m => m.ExamenesModule)
  },
  {
    path:'departamento',
    loadChildren: () => import('./Departamento/departamento.module').then(m => m.DepartamentoModule)
  },

  {
    path:'paisV2',
    loadChildren: () => import('./PaisV2/paisV2.module').then(m => m.PaisV2Module)
  },

  {
    path:'**',
    redirectTo: 'countries'
  }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [],
})
export class AppRoutingModule { }
