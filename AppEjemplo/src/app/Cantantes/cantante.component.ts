import { Component } from "@angular/core";

@Component({
  selector: 'app-cantantes-cantante',
  templateUrl: './cantante.component.html'
})

export class CantantesComponent{
  public name:string = 'Kurt Cobain'
  public age:number = 29;

  get getName():string{
    return this.name.toUpperCase();
  }

  public cambiarNombre():void{
    this.name = 'Freddy Mercury';
  }

  public cambiarEdad():void{
    this.age = 56;
  }
}
