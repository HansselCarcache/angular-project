import { Component, Input } from '@angular/core'
import { Departamento } from '../../interface/departamento'

@Component({
    selector: 'departamento-table',
    templateUrl: 'departamento-table.component.html',
    styles: [
    ]
})
export class DepartamentoTableComponent {
    @Input()
    public departamentos: Departamento[] = [];
}
