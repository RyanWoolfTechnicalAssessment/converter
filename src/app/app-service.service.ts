import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponse } from './response.interface';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  getData(endPoint:string = '',measurementAmount:number,fromUnit:string = '',toUnit:string = ''){
    console.log('in getData');
    // return this.http.get<IResponse>(`http://localhost:8080/api/${endPoint}?unitFrom=${fromUnit}&unitTo=${toUnit}&measurementAmount=${measurementAmount}`);
    return this.http.get<IResponse>(`https://www.ryanwoolftechnicalassessment.co.za/api/${endPoint}?unitFrom=${fromUnit}&unitTo=${toUnit}&measurementAmount=${measurementAmount}`);
  }
}
