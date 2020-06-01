import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-no-data',
    templateUrl: './no-data.component.html'
})

export class NoDataComponent {
    @Input() text: String = "No records Found";
    @Input() image:Boolean = true;
}
