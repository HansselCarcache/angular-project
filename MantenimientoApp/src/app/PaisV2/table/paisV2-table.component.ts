import { Component, EventEmitter, Input, Output } from '@angular/core'
import { PaisV2 } from '../interface/paisV2'

@Component({
    selector: 'paisV2-table',
    templateUrl: './paisV2-table.component.html',
    styles: [
    ]
})
export class PaisV2TableComponent {
    @Input()
    public paisesV2: PaisV2[] = [];
    @Output() updateEvent = new EventEmitter<any>();
    @Output() deleteEvent  = new EventEmitter<any>();


    update(p:PaisV2){
        this.updateEvent.emit(p);
    }

    delete(p:PaisV2){
        this.deleteEvent.emit(p);

    }
}
