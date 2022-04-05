import { Injectable } from '@angular/core';
import { Citiesinfo } from '../components/cities/cities-info-data';

@Injectable({
  providedIn: 'root'
})
export class GetcitiesService {

 

  constructor() { }
  
  getCities(){
    
    return Citiesinfo
    
    
  }
}
