import { Component } from '@angular/core';
import { Pais } from '../interface/pais';
import { PaisService } from '../services/pais.service';

@Component({
  selector: 'Pais-por-pais-pagina',
  templateUrl: './por-pais-pagina.component.html',
  styles: [
  ]
})
export class PorPaisPaginaComponent {
  public Pais: Pais[] = [];
  constructor(private paisService: PaisService){}

  public  ListadoPais(): void {
    let IdPais: number | undefined = undefined;



    // if (IdPais !== undefined) {
    //   this.paisService. ListadoPais( IdPais).subscribe(
    //     paises => {
    //       this.paises = paises;
    //       console.log(this.paises);
    //     },
    //     error => {
    //       console.error(error);
    //     }
    //   );
    // }
  }

}

