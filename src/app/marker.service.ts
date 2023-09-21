import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopupService } from './popup.service';


@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  metropolcities: string = '/assets/data/tr-cities.json'
  marmaracities: string ='/assets/data/marmaracities.json'
  akegecities: string ='/assets/data/akdeniz-egecities.json'
  karadenizcities:string='/assets/data/karadenizcities.json'
  anadolucities: string='/assets/data/icanadolucities.json'
  danadolucities: string='/assets/data/easterncities.json'
  

  constructor(private http: HttpClient, private popupService: PopupService) { }

  static scaledRadius(val: number, maxVal: number): number {
    return 80 * (val / maxVal);
  }

  makeEgeAkdenizCityMarkers(map: L.Map): void {
    this.http.get(this.akegecities).subscribe((res: any) => {
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = L.marker([lat, lon]);

        marker.bindPopup(this.popupService.makeCityPopup(c.properties))
        
        marker.addTo(map);
      }
    });
   }


  makeMarmaraCityMarkers(map: L.Map): void {
    this.http.get(this.marmaracities).subscribe((res: any) => {
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = L.marker([lat, lon]);

        marker.bindPopup(this.popupService.makeCityPopup(c.properties))
        
        marker.addTo(map);
      }
    });
   }

   makeCityCircleMarkers(map: L.Map): void {
    this.http.get(this.metropolcities).subscribe((res: any) => {
      const maxVal = Math.max(...res.features.map((x: any) => x.properties.population), 0);
  
      for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        const circle = L.circleMarker([lon, lat], {
          radius: MarkerService.scaledRadius(c.properties.population, maxVal)
        });
  
        circle.bindPopup(this.popupService.makeCityPopup(c.properties));
  
        circle.addTo(map);
      }
    });
  }
  static MarscaledRadius(val: number, maxVal: number): number {
    return 150 * (val / maxVal);
  }
  
  static EgescaledRadius(val: number, maxVal: number): number {
    return 50 * (val / maxVal);
  }
  
  static KaradenizscaledRadius(val: number, maxVal: number): number {
    return 70 * (val / maxVal);
  }

  static icascaledRadius(val: number, maxVal: number): number {
    return 100 * (val / maxVal);
  }
  static eastscaledRadius(val: number, maxVal: number): number {
    return 70 * (val / maxVal);
  }

  

  makeMarmaraCityCircleMarkers(map: L.Map): void {
    this.http.get(this.marmaracities).subscribe((res: any) => {
      const maxVal = Math.max(...res.features.map((x: any) => x.properties.population), 0);
  
      for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        const circle = L.circleMarker([lon, lat], {
          radius: MarkerService.MarscaledRadius(c.properties.population, maxVal)
        });
  
        circle.bindPopup(this.popupService.makeCityPopup(c.properties));
  
        circle.addTo(map);
      }
    });    
  }
  makeegeakCityCircleMarkers(map: L.Map): void {
    this.http.get(this.akegecities).subscribe((res: any) => {
      const maxVal = Math.max(...res.features.map((x: any) => x.properties.population), 0);
  
      for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        const circle = L.circleMarker([lon, lat], {
          radius: MarkerService.EgescaledRadius(c.properties.population, maxVal)
        });
  
        circle.bindPopup(this.popupService.makeCityPopup(c.properties));
  
        circle.addTo(map);
      }
    });    
  }
  makekaradenizCityCircleMarkers(map: L.Map): void {
    this.http.get(this.karadenizcities).subscribe((res: any) => {
      const maxVal = Math.max(...res.features.map((x: any) => x.properties.population), 0);
  
      for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        const circle = L.circleMarker([lon, lat], {
          radius: MarkerService.KaradenizscaledRadius(c.properties.population, maxVal)
        });
  
        circle.bindPopup(this.popupService.makeCityPopup(c.properties));
  
        circle.addTo(map);
      }
    });    
  }
  makeicCityCircleMarkers(map: L.Map): void {
    this.http.get(this.anadolucities).subscribe((res: any) => {
      const maxVal = Math.max(...res.features.map((x: any) => x.properties.population), 0);
  
      for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        const circle = L.circleMarker([lon, lat], {
          radius: MarkerService.icascaledRadius(c.properties.population, maxVal)
        });
  
        circle.bindPopup(this.popupService.makeCityPopup(c.properties));
  
        circle.addTo(map);
      }
    });    
  }
  makeEastCityCircleMarkers(map: L.Map): void {
    this.http.get(this.danadolucities).subscribe((res: any) => {
      const maxVal = Math.max(...res.features.map((x: any) => x.properties.population), 0);
  
      for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        const circle = L.circleMarker([lon, lat], {
          radius: MarkerService.eastscaledRadius(c.properties.population, maxVal)
        });
  
        circle.bindPopup(this.popupService.makeCityPopup(c.properties));
  
        circle.addTo(map);
      }
    });    
  }
}