import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { IConversions } from './conversions.interface';
import { IResponse } from './response.interface';
import { FormsModule } from '@angular/forms';
import { TEMPERATURE_ENDPOINT, DISTANCE_ENDPOINT, WEIGHT_ENDPOINT, TEMPERATURE_DEGREES_CELSIUS,TEMPERATURE_FAHRENHEIT,TEMPERATURE_KELVINS,DISTANCE_KILOMETERS,DISTANCE_METERS,DISTANCE_MILES,WEIGHT_GRAMS,WEIGHT_KILOGRAMS,WEIGHT_POUNDS } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'converter';
  public conversions:Array<IConversions> = [{conversionIdentifier: 1,description: 'Temperature - fahreinheit to degrees celsius',fromUnit: TEMPERATURE_FAHRENHEIT,toUnit:TEMPERATURE_DEGREES_CELSIUS  ,conversionEndPoint: TEMPERATURE_ENDPOINT},
  {conversionIdentifier: 3,description: 'Temperature - degrees celsius to fahreinheit',fromUnit: TEMPERATURE_DEGREES_CELSIUS,toUnit:TEMPERATURE_FAHRENHEIT,conversionEndPoint: TEMPERATURE_ENDPOINT},
  {conversionIdentifier: 4,description: 'Temperature - degrees celsius to kelvins',fromUnit: TEMPERATURE_DEGREES_CELSIUS,toUnit:TEMPERATURE_KELVINS,conversionEndPoint: TEMPERATURE_ENDPOINT},
  {conversionIdentifier: 5,description: 'Temperature - fahreinheit to kelvins',fromUnit: TEMPERATURE_FAHRENHEIT,toUnit:TEMPERATURE_KELVINS,conversionEndPoint: TEMPERATURE_ENDPOINT},
  {conversionIdentifier: 6,description: 'Temperature - kelvins to degrees celsius',fromUnit: TEMPERATURE_KELVINS,toUnit:TEMPERATURE_DEGREES_CELSIUS,conversionEndPoint: TEMPERATURE_ENDPOINT},
  {conversionIdentifier: 7,description: 'Distance - miles to kilometers',fromUnit: DISTANCE_MILES,toUnit:DISTANCE_KILOMETERS,conversionEndPoint: DISTANCE_ENDPOINT},
  {conversionIdentifier: 8,description: 'Distance - kilometers to miles',fromUnit: DISTANCE_KILOMETERS,toUnit:DISTANCE_MILES,conversionEndPoint: DISTANCE_ENDPOINT},
  {conversionIdentifier: 9,description: 'Distance - meters to miles',fromUnit: DISTANCE_METERS,toUnit:DISTANCE_MILES,conversionEndPoint: DISTANCE_ENDPOINT},
  {conversionIdentifier: 10,description: 'Distance - meters to kilometers',fromUnit: DISTANCE_METERS,toUnit:DISTANCE_KILOMETERS,conversionEndPoint: DISTANCE_ENDPOINT},
  {conversionIdentifier: 11,description: 'Distance - kilometers to meters',fromUnit: DISTANCE_KILOMETERS,toUnit:DISTANCE_METERS,conversionEndPoint: DISTANCE_ENDPOINT},
  {conversionIdentifier: 12,description: 'Distance - miles to meters',fromUnit: DISTANCE_MILES,toUnit:DISTANCE_METERS,conversionEndPoint: DISTANCE_ENDPOINT},
  {conversionIdentifier: 13,description: 'Weight - pounds to kilograms',fromUnit: WEIGHT_POUNDS,toUnit: WEIGHT_KILOGRAMS,conversionEndPoint: WEIGHT_ENDPOINT},
  {conversionIdentifier: 14,description: 'Weight - kilograms to pounds',fromUnit: WEIGHT_KILOGRAMS,toUnit:WEIGHT_POUNDS,conversionEndPoint: WEIGHT_ENDPOINT},
  {conversionIdentifier: 15,description: 'Weight - kilograms to grams',fromUnit: WEIGHT_KILOGRAMS,toUnit:WEIGHT_GRAMS,conversionEndPoint: WEIGHT_ENDPOINT},
  {conversionIdentifier: 16,description: 'Weight - pounds to grams',fromUnit: WEIGHT_POUNDS,toUnit:WEIGHT_GRAMS,conversionEndPoint: WEIGHT_ENDPOINT},
  {conversionIdentifier: 17,description: 'Weight - grams to kilograms',fromUnit: WEIGHT_GRAMS,toUnit:WEIGHT_KILOGRAMS,conversionEndPoint: WEIGHT_ENDPOINT},
  {conversionIdentifier: 18,description: 'Weight - grams to pounds',fromUnit: WEIGHT_GRAMS,toUnit:WEIGHT_POUNDS,conversionEndPoint: WEIGHT_ENDPOINT}

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
    var fromUnit = this.conversions.find(item => item.conversionIdentifier==this.conversionType)?.fromUnit;
    var toUnit = this.conversions.find(item => item.conversionIdentifier==this.conversionType)?.toUnit;
    
 
    this.service.getData(endPoint,amountToConvertValue,fromUnit,toUnit).subscribe((response => {
      console.log('response:',response);
      this.answer = response.answer;
    }),((error => {
      console.log('error:'+error);
    })));
  }

}
