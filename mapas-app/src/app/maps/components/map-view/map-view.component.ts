import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { Map, Popup, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styles: [
    `
      .map-container{
        height: 100vh;
        position: fixed;
        right:0;
        top: 0;
        width: 100%;
      }
    `
  ]
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor(private placesService: PlacesService, private mapService: MapService){}

  ngAfterViewInit(): void {
    if(!this.placesService.userLocation) throw Error('No hay placesService.userLocation');

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: this.placesService.userLocation, // starting position [lng, lat]
      zoom: 14 // starting zoom
    });

    const popup = new Popup()
      .setHTML(`
        <h6>Aquí estoy</h6>
        <span>Estoy en este lugar del mundo</span>
      `);

      new Marker({color: 'red'})
        .setLngLat(this.placesService.userLocation)
        .setPopup(popup)
        .addTo(map);

      this.mapService.setMap(map);
  }


}
