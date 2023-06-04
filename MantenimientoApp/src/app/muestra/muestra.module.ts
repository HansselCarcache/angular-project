import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MuestraRoutingModule } from "./muestra-routing.module";
import { SharedModule } from "../shared/shared.module";
import { MuestraComponent } from "./muestra.component";

@NgModule({
    imports:[
        CommonModule,
        MuestraRoutingModule,
        SharedModule
    ],
    exports:[],
    declarations:[
        MuestraComponent
    ],
    providers: [],
})
export class MuestraModule { }