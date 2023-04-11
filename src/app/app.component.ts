import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { IConversions } from './conversions.interface';
import { IResponse } from './response.interface';
import { FormsModule } from '@angular/forms';
import { TEMPERATURE_ENDPOINT, DISTANCE_ENDPOINT, WEIGHT_ENDPOINT, DISTANCE_KILOMETERS_TO_MILES, DISTANCE_MILES_TO_KILOMETERS,TEMPERATURE_CELSIUS_TO_FAHRENHEIT,TEMPERATURE_FAHRENHEIT_TO_CELSIUS, WEIGHT_KILOGRAMS_TO_POUNDS, WEIGHT_POUNDS_TO_KILOGRAMS } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'converter';
  public conversions:Array<IConversions> = [{conversionIdentifier: 1,description: 'Temperature - fahreinheit to degrees celsius',calculationId: TEMPERATURE_FAHRENHEIT_TO_CELSIUS,conversionEndPoint: TEMPERATURE_ENDPOINT},
  {conversionIdentifier: 2,description: 'Temperature - degrees celsius to fahreinheit',calculationId: TEMPERATURE_CELSIUS_TO_FAHRENHEIT,conversionEndPoint: TEMPERATURE_ENDPOINT},
  {conversionIdentifier: 3,description: 'Distance - miles to kilometers',calculationId: DISTANCE_MILES_TO_KILOMETERS,conversionEndPoint: DISTANCE_ENDPOINT},
  {conversionIdentifier: 4,description: 'Distance - kilometers to miles',calculationId: DISTANCE_KILOMETERS_TO_MILES,conversionEndPoint: DISTANCE_ENDPOINT},
  {conversionIdentifier: 5,description: 'Weight - pounds to kilograms',calculationId: WEIGHT_POUNDS_TO_KILOGRAMS,conversionEndPoint: WEIGHT_ENDPOINT},
  {conversionIdentifier: 6,description: 'Weight - kilograms to pounds',calculationId: WEIGHT_KILOGRAMS_TO_POUNDS,conversionEndPoint: WEIGHT_ENDPOINT}

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
    var endPoint = this.conversions.find(item => item.conversionIdentifier==this.conversionType)?.conversionEndPoint;
    var calculationId = this.conversions.find(item => item.conversionIdentifier==this.conversionType)?.calculationId;

    
 
    this.service.getData(endPoint,amountToConvertValue,calculationId).subscribe((response => {
      console.log('response:',response);
      this.answer = response.answer;
    }),((error => {
      console.log('error:'+error);
    })));
  }

}
