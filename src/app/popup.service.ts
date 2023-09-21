import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  makeCityPopup(data: any): string {
    return `` +
      `<div>City: ${ data.name }</div>` +
      `<div>Population: ${ data.population }</div>`
   }
}
