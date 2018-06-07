import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

/*
  Generated class for the RouteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RouteProvider {

    public stops = [];
    public observableStops:any;

    constructor() {
        this.stops = [
            { lat: 51.39358266870915, lng: -0.3036689758300781, name: "Corrie Hall", description: "Usual start place, DJ Archive's favourite gaff"},
            { lat: 51.407025, lng: -0.30818890, name: "The mill", description: "Max's mum has got really big tits"},
            { lat: 51.4082, lng: -0.3077, name: "The Ram", description: "Max's mum has got big tits"},
            { lat: 51.40992104465776, lng: -0.3051523872547932, name: "bacchus", description: "We all know we'll end up there. DJ Archive is a regular on the lineup"}
        ];

        this.observableStops = new BehaviorSubject( this.stops);
    }

    eventChange() {
        this.observableStops.next(this.stops);
    }

}
