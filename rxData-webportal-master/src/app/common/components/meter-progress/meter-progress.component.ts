import { Component, Input, OnInit } from '@angular/core';
import { ApexChart, ApexFill, ApexNonAxisChartSeries, ApexPlotOptions, ApexStroke } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
};

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'meter-progress',
  templateUrl: './meter-progress.component.html',
  styleUrls: ['./meter-progress.component.scss']
})
export class MeterProgressComponent implements OnInit {

  public chartOptions: any;

  @Input() data: any;
  public color = 'grey';
  public icon = '';
  // public canvasWidth = 200
  // public needleValue = 65
  // public centralLabel = ''
  // public name = ''
  // public bottomLabel = ''
  // public options = {
  //     hasNeedle: false,
  //     needleColor: 'gray',
  //     needleUpdateSpeed: 1000,
  //     arcColors: ['rgb(5, 214, 114)', 'lightgray'],
  //     arcDelimiters: [63],
  //     // rangeLabel: ['0', '100'],
  //     needleStartValue: 50,
  // }

  constructor() {
    this.chartOptions = {
      series: [67],
      chart: {
        height: 230,
        type: 'radialBar',
        offsetY: 0
      },
      hollow: {
        size: '50%'
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: 0,
              fontSize: '32px',
              fontFamily: 'Montserrat-SemiBold',
              fontWeight: 600,
              color: '#006BFF',
              formatter(val: any): any {
                return val + '%';
              }
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        colors: ['#05D672'],
        gradient: {
          shade: 'dark',
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
        }
      },
      stroke: {
        dashArray: 4
      }
    };
   }

  ngOnInit(): void {
    this.icon = this.data.upDown === 'up' ? 'fa fa-caret-up' : 'fa fa-caret-down';
    this.color = this.data.upDown === 'up' ? 'green' : 'red';
  }

}
