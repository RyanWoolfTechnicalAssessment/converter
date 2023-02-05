import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  getData(){
    console.log('in getData');
    return this.http.get('http://measurementconverter-env.eba-j8en5ihn.ap-northeast-1.elasticbeanstalk.com/api/measure-units?measurementType=temperature-type&measurementAmount=15.5&measurementSystemFrom=imperial');
  }
}
