import { Component, Input } from '@angular/core';

/**
 * Generated class for the PtliveCountdownComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ptlive-countdown',
  templateUrl: 'ptlive-countdown.html'
})
export class PtliveCountdownComponent{

    @Input('date') date;
    countdown:any = {};

    constructor() {
        this.countdown = {
            'days' : 0,
            'hours' : 0,
            'minutes' : 0,
            'seconds' : 0
        };
        this.initializeClock();
    }

    getTimeRemaining() {
        var t = Date.parse(this.date) - Date.now();
        if( !t) {
            return;
        }
        var seconds = Math.floor( (t/1000) % 60 );
        var minutes = Math.floor( (t/1000/60) % 60 );
        var hours = Math.floor( (t/(1000*60*60)) % 24 );
        var days = Math.floor( t/(1000*60*60*24) );

        this.countdown['days'] = days;
        this.countdown['hours'] = hours;
        this.countdown['minutes'] = minutes;
        this.countdown['seconds'] = seconds;

        return t;
    }

    initializeClock() {
        let clock = setInterval(() => {
            let total = this.getTimeRemaining();
            if (total <= 0) {
                clearInterval( clock);
            }
        }, 1000);
    }

}
