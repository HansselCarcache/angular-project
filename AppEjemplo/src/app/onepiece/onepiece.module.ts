import { NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  imports: [],
  exports: [MainPageComponent],
  declarations: [MainPageComponent, ListComponent, AddCharacterComponent],
  providers: [],
})
export class OnePieceModule { }
