import { Component, Input } from '@angular/core';

/**
 * Generated class for the PtliveContentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ptlive-content',
  templateUrl: 'ptlive-content.html'
})
export class PtliveContentComponent {

    @Input('logo') logo = false;

    constructor() { }

}
