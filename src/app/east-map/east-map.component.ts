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
  selector: 'app-east-map',
  templateUrl: './east-map.component.html',
  styleUrls: ['./east-map.component.scss']
})
export class EastMapComponent implements AfterViewInit {
  private map!: L.Map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [38.695292, 41.002601],
      zoom: 8
    });

  const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 3,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });

  tiles.addTo(this.map);
}

  constructor(private markerService: MarkerService) { }

  ngAfterViewInit(): void {
    this.initMap();
  this.markerService.makeEastCityCircleMarkers(this.map);
  }
}
