import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../marker.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = iconDefault;
@Component({
  selector: 'app-ege-akdeniz-map',
  templateUrl: './ege-akdeniz-map.component.html',
  styleUrls: ['./ege-akdeniz-map.component.scss']
})
export class EgeAkdenizMapComponent implements AfterViewInit {
  private egemap!: L.Map;

  private initMap(): void {
    this.egemap = L.map('map', {
      center: [ 37.521575, 30.313704],
      zoom: 8
    });

  const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 3,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });

  tiles.addTo(this.egemap);
}

  constructor(private markerService: MarkerService) { }

  ngAfterViewInit(): void {
    this.initMap();
  this.markerService.makeegeakCityCircleMarkers(this.egemap);
  }
}
