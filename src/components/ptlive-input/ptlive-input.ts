import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the PtliveInputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'ptlive-input',
    templateUrl: 'ptlive-input.html'
})
export class PtliveInputComponent {

    @Input('type') type = 'text';
    @Input('placeholder') placeholder = '';
    @Input('error') error = '';
    @Input('value') value = '';
    @Output() valueChange = new EventEmitter();
    @Output() errorChange = new EventEmitter();

    constructor() {}

    updated( value) {
        this.valueChange.emit( value);
        this.errorChange.emit('');
    }

}
