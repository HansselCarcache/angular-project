import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { PaisV2TableComponent } from "./table/paisV2-table.component";
import { PaisV2Component } from "./paisV2.component";
import { PaisV2FormComponent } from "./forms/paisV2-forms.component";
import { PaisV2RoutingModule } from "./paisV2-routing.module";


@NgModule({
    imports:[
        CommonModule,
        PaisV2RoutingModule,
        SharedModule,
        FormsModule
    ],
    exports:[],
    declarations:[
      PaisV2Component,
        PaisV2TableComponent,
        PaisV2FormComponent
    ],
    providers: [],
})
export class PaisV2Module { }
