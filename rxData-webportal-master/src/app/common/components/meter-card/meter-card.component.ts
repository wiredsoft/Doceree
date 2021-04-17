import { Component, Input, OnInit } from '@angular/core';
import { ApexChart, ApexNonAxisChartSeries, ApexPlotOptions } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-meter-card',
  templateUrl: './meter-card.component.html',
  styleUrls: ['./meter-card.component.scss']
})
export class MeterCardComponent implements OnInit {
  @Input() cardDetail: any = {};
  public chartOptions: any;

  ngOnInit(): void {
    const ths = this;
    this.chartOptions = {
      series: [33],
      chart: {
        height: 180,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '60%'
          },
          dataLabels: {
            show: true,
            name: {
                show: this.cardDetail.nameShow !== undefined ? this.cardDetail.nameShow : true,
                fontSize: '10px',
                fontFamily: undefined,
                fontWeight: 600,
                color: undefined,
                offsetY: 24
              },
              value: {
                show: true,
                fontSize: '22px',
                fontFamily: 'Montserrat-Bold',
                fontWeight: 600,
                color: undefined,
                offsetY: this.cardDetail.nameShow !== undefined ? 10 : -11,
                formatter(val: any): void {
                  return ths.cardDetail.sign !== undefined ? ths.cardDetail.sign + val : val + '%';
                }
              }
          }
        }
      },
      labels: ['Completed']
    };
  }

}
