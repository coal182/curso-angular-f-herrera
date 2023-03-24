import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: []
  };
  public doughnutChartType: ChartType = 'doughnut';
  
  constructor(private graficasService: GraficasService){

  }
  
  ngOnInit(): void {
    this.graficasService.getUsuariosRedesSocialesDonaData().subscribe(({labels, values}) => {

      this.doughnutChartData.labels = labels;
      this.doughnutChartData.datasets.push({data: values});
      
    });
  }
  
}
