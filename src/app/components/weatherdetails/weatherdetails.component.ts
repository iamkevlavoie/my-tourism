import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetcitiesService } from 'src/app/services/getcities.service';
import { GetweatherService } from 'src/app/services/getweather.service';

@Component({
  selector: 'app-weatherdetails',
  templateUrl: './weatherdetails.component.html',
  styleUrls: ['./weatherdetails.component.css']
})
export class WeatherdetailsComponent implements OnInit {

  name:any;
  summerM:any;
  summerN:any;
  winterM:any;
  winterN:any;
  springM:any;
  springN:any;
  autumnM:any;
  autumnN:any;
  vt:any;
  vf:any;

  constructor(private route: ActivatedRoute, ) { }

  ngOnInit(){
    
    this.route.paramMap.subscribe(params =>{
      this.name = params.get("name")
      this.summerM = params.get("summerM")
      this.summerN = params.get("summerN")
      this.winterM = params.get("winterM")
      this.winterN = params.get("winterN")
      this.springM = params.get("springM")
      this.springN = params.get("springN")
      this.autumnM = params.get("autumnM")
      this.autumnN = params.get("autumnN")
      this.vt = params.get("visitTo")
      this.vf = params.get("visitFrom")
    })
  }

}
