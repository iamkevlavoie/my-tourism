import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GetCityNamesService } from 'src/app/services/get-city-names.service';
import { GetcitiesService } from 'src/app/services/getcities.service';
import { avoidWord } from './customValidation';

@Component({
  selector: 'app-tech-ideas',
  templateUrl: './tech-ideas.component.html',
  styleUrls: ['./tech-ideas.component.css']
})
export class TechIdeasComponent implements OnInit {
  cities: any
  techform;
  isDisable = true;

  constructor(private _getcity:GetCityNamesService, private formB: FormBuilder) {
    this.cities = this._getcity.getNames();
    this.techform = this.formB.group({
      name: ["", [Validators.required, Validators.minLength(3),avoidWord(/tourist/)]],
      age: [""],
      email: ["", [Validators.required]],
      city: ["", [Validators.required]],
      brief: ["", [Validators.required, Validators.minLength(100),avoidWord(/nothing/)]],
    })

  }

  



  ngOnInit() {

  }

  //getter method
  get nameFormControl(){
    return this.techform.get('name')!;
  }
  //getter method
  get emailFormControl(){
    return this.techform.get('email')!;
  }
  //getter method
  get cityFormControl(){
    return this.techform.get('city')!;
  }
  //getter method
  get briefFormControl(){
    return this.techform.get('brief')!;
  }

  //OnClick
  onClick(){
    console.log(this.techform.controls?.['brief'].value)
    this.techform.reset();
  }

}
