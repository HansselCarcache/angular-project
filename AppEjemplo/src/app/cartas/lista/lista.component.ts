import { Component } from '@angular/core';

@Component({
  selector: 'app-cartas-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  public cartas:string[] = ['Broww, Huntsman of Dark World', 'Genta, Gateman of Dark World', 'Reign-Beaux, Overking of Dark World'];
  public deletedCard?:string;

  public removeLastItem():void{
    this.deletedCard = this.cartas.pop();
  }
}
