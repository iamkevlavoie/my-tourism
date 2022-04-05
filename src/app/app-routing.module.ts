import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './components/cities/cities.component';

import { HomeComponent } from './components/home/home.component';
import { TechIdeasComponent } from './components/tech-ideas/tech-ideas.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherdetailsComponent } from './components/weatherdetails/weatherdetails.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'Cities', component: CitiesComponent},
  {path: 'Weather', component: WeatherComponent},
  {path: 'Weather/:name/:springN/:springM/:summerN/:summerM/:winterN/:winterM/:autumnN/:autumnM/:visitFrom/:visitTo', component:WeatherdetailsComponent},
  {path: 'TechIdea', component: TechIdeasComponent},
  
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
