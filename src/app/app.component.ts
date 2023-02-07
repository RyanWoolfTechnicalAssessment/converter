import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { IConversions } from './conversions.interface';
import { IResponse } from './response.interface';
import { FormsModule } from '@angular/forms';
import { TEMPERATURE, KILOMETER_MILES, KILOGRAM_POUNDS, SYSTEM_METRIC, SYSTEM_IMPERIAL } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'converter';
  public conversions:Array<IConversions> = [{conversionIdentifier: 1,description: 'Temperature - fahreinheit to degrees celsius',measurementType: TEMPERATURE,measurementSystemFrom: SYSTEM_IMPERIAL},
  {conversionIdentifier: 2,description: 'Temperature - degrees celsius to fahreinheit',measurementType: TEMPERATURE,measurementSystemFrom: SYSTEM_METRIC},
  {conversionIdentifier: 3,description: 'Distance - miles to kilometers',measurementType: KILOMETER_MILES,measurementSystemFrom: SYSTEM_IMPERIAL},
  {conversionIdentifier: 4,description: 'Distance - kilometers to miles',measurementType: KILOMETER_MILES,measurementSystemFrom: SYSTEM_METRIC},
  {conversionIdentifier: 5,description: 'Weight - pounds to kilograms',measurementType: KILOGRAM_POUNDS,measurementSystemFrom: SYSTEM_IMPERIAL},
  {conversionIdentifier: 6,description: 'Weight - kilograms to pounds',measurementType: KILOGRAM_POUNDS,measurementSystemFrom: SYSTEM_IMPERIAL}

]
  
  public conversionIdentifier:number = 1;
  public answer:number = 0;
  amountToConvert: number = 0;
  conversionType: number = 1;
  constructor(private service : AppServiceService){

  }

  ngOnInit(){
    this.getDataFromAPI();
  }

  getDataFromAPI(){

    var amountToConvertValue = this.amountToConvert || 0;
    var measurementType = this.conversions.find(item => item.conversionIdentifier==this.conversionType)?.measurementType;
    var measurementSystemFrom = this.conversions.find(item => item.conversionIdentifier==this.conversionType)?.measurementSystemFrom;

    
 
    this.service.getData(measurementType,amountToConvertValue,measurementSystemFrom).subscribe((response => {
      console.log('response:',response);
      this.answer = response.answer;
    }),((error => {
      console.log('error:'+error);
    })));
  }

}
