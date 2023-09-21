import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map-metropolitan/map.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MarmaraMapComponent } from './marmaramap/marmaramap.component';
import { EgeAkdenizMapComponent } from './ege-akdeniz-map/ege-akdeniz-map.component';
import { KaradenizMapComponent } from './karadeniz-map/karadeniz-map.component';
import { IcanadoluMapComponent } from './icanadolu-map/icanadolu-map.component';
import { EastMapComponent } from './east-map/east-map.component';

const routes: Routes = [
    { path: '', component: HomepageComponent }, 
    { path: 'metropolitan', component: MapComponent },
    { path: 'marmara', component: MarmaraMapComponent},
    {path: 'ege-akdeniz', component:EgeAkdenizMapComponent},
    {path: 'karadeniz', component: KaradenizMapComponent},
    {path: 'icanadolu', component:IcanadoluMapComponent},
    {path: 'dogu', component: EastMapComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
