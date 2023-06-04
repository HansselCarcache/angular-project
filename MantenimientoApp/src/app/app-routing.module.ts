import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { MuestraComponent } from './muestra/muestra.component';

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
  {
    path:'pais',
    loadChildren: () => import('./Pais/pais.module').then(m => m.PaisModule)
  },
  {
    path:'muestra',
    loadChildren: () => import('./muestra/muestra.module').then(m => m.MuestraModule)
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
