import { Component, Inject, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';
import { getBaseUrl } from '../../main';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})

@NgModule({
  providers: [HttpService],
})

export class FetchDataComponent {
  myGreetings: {};
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
    private _http: HttpClient
  ) { }
  //Hello() {
  //  console.log("here")
  //  let observable = this._httpService.getString();
  //  observable.subscribe(data => {
  //    console.log("Success");
  //    this.myGreeting = data;
  //  })
  //}

  ngOnInit() {
    this.myGreetings = { name: "" };
  }

  Hello() {
    let observable = this._http.get("weatherforecast/helloWorld")
    observable.subscribe(data => {
      console.log(data);
      this.myGreetings = data;
    });
  }

  passInfo() {
    console.log(this.myGreetings)
    let observable = this._httpService.myNameIs(this.myGreetings)
    observable.subscribe(data => {
      console.log(data);
      this.myGreetings = data
    });
  }
}


interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
