import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  getData(){
    console.log('in getData');
    return this.http.get('https://www.ryanwoolftechnicalassessment/api/measure-units?measurementType=temperature-type&measurementAmount=15.5&measurementSystemFrom=imperial');
  }
}
