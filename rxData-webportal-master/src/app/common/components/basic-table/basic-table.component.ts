import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApexChart, ApexFill, ApexNonAxisChartSeries, ApexPlotOptions } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
};


@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit {
  public chartOptions: any; // Partial<ChartOptions>;
  @Input() tableObj: any;
  @Output() addEditEvent: any = new EventEmitter();
  @Output() viewDeleteEvent: any = new EventEmitter();
  config: any;
  collection: any = [];
  constructor() {
    this.chartOptions = {
      offsetY: 0,
      fill: {
        colors: ['#ec1c24']
      },
      series: [30],
      chart: {
        height: 77,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '40%',
          }
        },
        dataLabels: {
          show: true,
          name: {
            show: false,
          },
          value: {
            fontFamily: 'Montserrat-SemiBold',
            color: '#111',
            fontSize: '30px',
            show: false,
            offsetY: -80,
          }
        }
      },
      labels: ['']
    };
    this.config = {
      currentPage: 1,
      itemsPerPage: 10,
      totalItems: 100
    };

    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }
  public fill = {
    colors: ['#ec1c24']
    // ,"#f8d33e","#05d672"]
  };
  ngOnInit(): void {
    console.log(this.tableObj);
    // 50:#f8d33e
    // 25:#ec1c24
    // 75:#05d672

  }
  onClickColoumn(Index: any, Object: any): void {
    this.addEditEvent.emit({ index: Index, object: Object });
  }
  pageChange(event: any): void {
    this.config.currentPage = event;
  }
  checkedViewDelete(title: any) {
    this.viewDeleteEvent.emit(title);
  }
}
