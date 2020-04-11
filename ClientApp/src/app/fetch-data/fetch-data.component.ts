import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getBaseUrl } from '../../main';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];
  http: HttpClient

  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //  http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
  //    this.forecasts = result;
  //    console.log("**" + baseUrl + "**")
  //  }, error => console.error(error));
  //}
  @Inject('BASE_URL') baseUrl: string

  constructor() { }
  Hello() {
    console.log(this.baseUrl);
  }
}


interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
