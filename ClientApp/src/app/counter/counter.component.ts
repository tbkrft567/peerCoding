import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  public HelloResponse: string

  public incrementCounter() {
    this.currentCount++;
  }

  public Hello() {
    console.log("Working...");
    this.HelloResponse = "Hello";
    return this.HelloResponse;
  }

}
