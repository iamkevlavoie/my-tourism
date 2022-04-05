import { Component, OnInit } from '@angular/core';
import { Cities } from 'src/app/interfaces/cities';
import { GetcitiesService } from 'src/app/services/getcities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities: any;
  color: any;



  constructor(private _cities: GetcitiesService) {
    // this.cities = _cities.getCities()
    // this.color = this.colorit();
  }

  colorit() {
    for (var i = 0; i < this.cities.length; i++) {
      if (this.cities[i].attractionSites.length < 2) {
        return false
      }

    }
    return true
  }



  ngOnInit() {
    this.cities = this._cities.getCities()
    this.color = this.colorit();
    console.log(this.color)
  }

}
