import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponse } from './response.interface';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  getData(measurementType:string = '',measurementAmount:number,measurementSystemFrom:string = ''){
    console.log('in getData');
    return this.http.get<IResponse>(`http://localhost:8080/api/measure-units?measurementType=${measurementType}&measurementAmount=${measurementAmount}&measurementSystemFrom=${measurementSystemFrom}`);
  }
}
