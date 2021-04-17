import { Component, OnInit, Input } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis } from 'ng-apexcharts';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnInit {

  @Input() radarObj: any = {};

  public series: ApexAxisChartSeries  = [];
  public chart: ApexChart = {
    height: 300,
    width: 400,
    type: 'radar',
    toolbar: {
      show: false
    }
  };
  public xaxis: ApexXAxis = {
    categories: ['Accuracy', 'Reliability', 'Completeness', 'Relevance', 'Timeliness'],
    labels: {
      show: true,
      style: {
        colors: ['#969696'],
        fontSize: '8px',
        fontFamily: 'Montserrat-SemiBold'
      }
    }
  };
  public yaxis = {
      show: false
  };
  public fill = {
    opacity: 0.1,
    colors: ['#c15df1']
  };
  public stroke = {
    show: true,
    width: 2,
    colors: ['#c15df1'],
    dashArray: 0
  };
  public markers = {
    size: 0
  };

  constructor() { }

  ngOnInit(): void {
    this.series = [
      { name: '', data: [90, 65, 75, 60, 85] }
    ];
  }

}
