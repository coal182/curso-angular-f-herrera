import { Component, Input } from '@angular/core';

@Component({
  selector: 'pipes',
  templateUrl: `./pipes.component.html`,
  styles: [`h1 { font-family: Lato; }`],
})
export class PipesComponent {
  @Input() name: string;
  public price: number = 1000;
  public obj = { obj: 'object' };

  public showName() {
    console.log(this.name);
    console.log(this.price);
    console.log(this.obj);
  }
}
