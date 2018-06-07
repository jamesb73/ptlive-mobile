import { Component, ViewChild, ElementRef} from '@angular/core';
import { RouteProvider } from './../../providers/route/route';

declare var google;
declare var map;


@Component({
    selector: 'ptlive-map',
    templateUrl: 'ptlive-map.html'
})

export class PtliveMapComponent {

    @ViewChild('map') mapElement: ElementRef;
    public map:any;

    constructor(public route: RouteProvider) {}


    ngOnInit(){
        this.route['observableStops']
        .subscribe(() => {
            this.initMap();
        });
    }

    initMap() {

        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 10,
            center: { lat:51.515419, lng:-0.141099},
            disableDefaultUI: true
        });

        let waypoints = [];

        for( let i = 0; i < this.route.stops.length; i++) {
            let stop = this.route.stops[i];
            let marker = new google.maps.Marker({
                position: {lat: stop.lat, lng: stop.lng},
                map: this.map,
                icon: !i ?
                    { url : 'assets/imgs/map-marker-green.svg', scaledSize: new google.maps.Size(50, 50) } :
                    { url : 'assets/imgs/map-marker.svg', scaledSize: new google.maps.Size(40, 40) },
            });

            marker.addListener('click', function() {
                new google.maps.InfoWindow({
                    content: `<h1>${stop.name}</h1><p>${stop.description}</p>`,
                    maxWidth: 250
                }).open(map, marker);
            });

            if( i && ( i + 1) != this.route.stops.length) {
                waypoints.push({
                    location: new google.maps.LatLng(stop.lat,stop.lng),
                    stopover: true
                });
            }

            if( !i) {
                this.map.setZoom(14);
                this.map.setCenter(marker.getPosition());
            }
        }

        if( this.route.stops.length >= 2)
        {
            let directionsService = new google.maps.DirectionsService();
            let directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
            directionsDisplay.setMap(this.map);

            directionsService.route({
                origin: { lat: this.route.stops[0].lat, lng: this.route.stops[0].lng},
                destination:{ lat: this.route.stops[ this.route.stops.length - 1 ].lat, lng: this.route.stops[this.route.stops.length - 1].lng},
                waypoints: waypoints,
                travelMode: 'WALKING'
            }, (response, status) => {
               directionsDisplay.setDirections(response);
            });
        }
    }
}
