import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './components/cities/cities.component';
import { HomeComponent } from './components/home/home.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherdetailsComponent } from './components/weatherdetails/weatherdetails.component';
import { ImportantTextDirective } from './directives/important-text.directive';
import { TechIdeasComponent } from './components/tech-ideas/tech-ideas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetCityNamesDirective } from './services/get-city-names.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CitiesComponent,
    WeatherComponent,
    WeatherdetailsComponent,
    ImportantTextDirective,
    TechIdeasComponent,
    GetCityNamesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
