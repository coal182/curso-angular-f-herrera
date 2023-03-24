import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {
  
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;
  center: [number, number] = [-4.421433, 36.7187896];

  ngOnDestroy(): void {
    this.mapa.off('zoom', () => {});
    this.mapa.off('zoomend', () => {});
    this.mapa.off('move', () => {});
  }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.center, // starting position [lng, lat]
      zoom: this.zoomLevel // starting zoom
    });

    this.mapa.on('zoom', (ev) => {
      this.zoomLevel = this.mapa.getZoom();
    });

    this.mapa.on('zoomend', (ev) => {
      if(this.mapa.getZoom() > 18){
        this.mapa.zoomTo(18);
      }
    });

    this.mapa.on('move', (event) => {
      const target = event.target;
      const {lng, lat} = target.getCenter();
      this.center = [lng, lat];
    });
  }

  zoomOut(){
    this.mapa.zoomOut();

  }

  zoomIn(){
    this.mapa.zoomIn();
    
  }

  zoomCambio(valor: string){
    this.mapa.zoomTo( Number(valor) );
  }

}
