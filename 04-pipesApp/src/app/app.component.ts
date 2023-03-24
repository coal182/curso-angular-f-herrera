import { Component, VERSION } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'cristian martín';
  constructor(private primengConfig: PrimeNGConfig) {}
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
