import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PaisV2Component } from './paisV2.component';

const routes: Routes=[
    {
        path:'by-paisV2',
        component:PaisV2Component
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
export class PaisV2RoutingModule { }
