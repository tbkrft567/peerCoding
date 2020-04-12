import { Component, Inject, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';
import { getBaseUrl } from '../../main';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  myGreeting: {};
  //public forecasts: WeatherForecast[];
  //http: HttpClient

  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //  http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
  //    this.forecasts = result;
  //    console.log("**" + baseUrl + "**")
  //  }, error => console.error(error));
  //}
  //@Inject('BASE_URL') baseUrl: string

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }
  Hello() {
    let observable = this._httpService.getString();
    observable.subscribe(data => {
      console.log("Success");
      this.myGreeting = data;
    })
  }
}


interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
