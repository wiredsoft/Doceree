import { Component, Input, OnInit } from '@angular/core';
import { ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexMarkers, ApexStroke,  ApexXAxis, ApexYAxis } from 'ng-apexcharts';

export type ChartOptions = {
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  fill: ApexFill;
  markers: ApexMarkers;
  legend: ApexLegend;
};

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  public chartOptions: ChartOptions;
  @Input() dataLabel: any[] = [];
  @Input() dataSeries: any[] = [];
  @Input() height: any = 350;

  constructor() {
    this.chartOptions = {
      chart: {
        type: 'area',
        height: this.height,
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        colors: ['#006bff', '#05d672'],
      },
      stroke: {
        curve: 'smooth',
        colors: ['#006bff', '#05d672'],
        width: 1,
      },
      fill: {
        colors: ['#006bff', '#05d672'],
        opacity: 0.4,
        gradient: {
          opacityFrom: 0.4,
          opacityTo: 0.4
        }
      },
      xaxis: {
        type: 'datetime',
        labels: {
          format: 'dd/MM'
        }
      },
      yaxis: {
        opposite: false
      },
      legend: {
        show: false,
        horizontalAlign: 'left'
      }
    };
   }

  ngOnInit(): void {
  }

}
