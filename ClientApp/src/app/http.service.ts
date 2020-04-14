import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getString() {
    return this._http.get("weatherforecast/helloWorld");
  }
  getString2() {
    return this._http.get("weatherforecast");
  }

  myNameIs(myGreetings) {

  return this._http.post("weatherforecast/myNameIs", myGreetings)
  }
}
