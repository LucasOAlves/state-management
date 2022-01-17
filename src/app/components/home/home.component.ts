import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public step: number = 0;

  constructor() {}

  ngOnInit(): void {}

  nextStep() {
    this.step++;
  }

  backStep() {
    this.step--;
  }
}
