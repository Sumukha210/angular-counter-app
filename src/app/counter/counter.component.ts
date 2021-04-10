import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  count: number = 0;

  handleInc = () => (this.count += 1);
  handleDec = () => (this.count -= 1);

  handleIncByVal = (val: number) => (this.count += val);

  handleDecByVal = (val: number) => (this.count -= val);

  handleReset = () => (this.count = 0);
}
