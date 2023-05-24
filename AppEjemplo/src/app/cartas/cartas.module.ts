import { NgModule } from '@angular/core';
import { ListaComponent } from './lista/lista.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule],
  exports: [ListaComponent],
  declarations: [ListaComponent],
})
export class CartasModule { }
