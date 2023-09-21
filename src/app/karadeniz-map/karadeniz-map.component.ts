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
  selector: 'app-karadeniz-map',
  templateUrl: './karadeniz-map.component.html',
  styleUrls: ['./karadeniz-map.component.scss']
})
export class KaradenizMapComponent implements AfterViewInit {
  private Marmaramap!: L.Map;

  private initMap(): void {
    this.Marmaramap = L.map('map', {
      center: [41.369475, 36.126488],
      zoom: 8
    });

  const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 3,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });

  tiles.addTo(this.Marmaramap);
}

  constructor(private markerService: MarkerService) { }

  ngAfterViewInit(): void {
    this.initMap();
  this.markerService.makekaradenizCityCircleMarkers(this.Marmaramap);
  }
}