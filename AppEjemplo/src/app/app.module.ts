import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CantantesComponent } from './Cantantes/cantante.component';
import { CartasModule } from './cartas/cartas.module';
import { OnePieceModule } from './onepiece/onepiece.module';

@NgModule({
  declarations: [
    AppComponent,
    CantantesComponent,
  ],
  imports: [
    BrowserModule,
    CartasModule,
    OnePieceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
