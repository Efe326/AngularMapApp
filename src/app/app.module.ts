import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './marker.service';
import { PopupService } from './popup.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map-metropolitan/map.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MarmaraComponent } from './marmara-card/marmara.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MetropolCardComponent } from './metropol-card/metropol-card.component';
import { MarmaraMapComponent } from './marmaramap/marmaramap.component';
import { KaradenizCardComponent } from './karadeniz-card/karadeniz-card.component';
import { EgeAkdenizComponent } from './ege-akdeniz/ege-akdeniz.component';
import { EgeAkdenizMapComponent } from './ege-akdeniz-map/ege-akdeniz-map.component';
import { KaradenizMapComponent } from './karadeniz-map/karadeniz-map.component';
import { IcAnadoluCardComponent } from './ic-anadolu-card/ic-anadolu-card.component';
import { DoguCardComponent } from './dogu-card/dogu-card.component';
import { IcanadoluMapComponent } from './icanadolu-map/icanadolu-map.component';
import { EastMapComponent } from './east-map/east-map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavBarComponent,
    MarmaraComponent,
    HomepageComponent,
    MetropolCardComponent,
    MarmaraMapComponent,
    KaradenizCardComponent,
    EgeAkdenizComponent,
    EgeAkdenizMapComponent,
    KaradenizMapComponent,
    IcAnadoluCardComponent,
    DoguCardComponent,
    IcanadoluMapComponent,
    EastMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    MarkerService,
    PopupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
