import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType, ChartData, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {
  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() horizontal: boolean = false;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
  };
  public barChartType: ChartType = 'bar';

  @Input() barChartData!: ChartData<'bar'>;

  constructor(){
    
  }

  ngOnInit(): void {
    if (this.horizontal){
        //Esto muestra la gráfica en sentido horizontal y todos los datos en ese sentido.
        this.barChartOptions!.indexAxis = 'y';
        this.barChartOptions!.scales!["y"]!.min = 0;
    }
  }

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }
}
