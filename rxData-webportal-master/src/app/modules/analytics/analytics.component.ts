import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApexChart, ApexNonAxisChartSeries, ApexPlotOptions } from 'ng-apexcharts';
import { LoginService } from 'src/app/service/login.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  @ViewChild('chart') chart: any;
  public chartOptions: any; // Partial<ChartOptions>;

  public heading = 'Performance analytics';
  public subheading = 'A comprehensive dashboard that gives you an overview of all the critical aspects. View your earnings, view total accounts, understand your earning trends and review leaderboard based on pin code and confidence scores.';
  public gridList: any[] = [];
  public progressMeter: any = {};
  public tableData: any;
  public tableCol: any;
  public tableObj: any = {};
  public dateRangePickerOptions: any = {
    locale: { format: 'DD-MM-YYYY' },
    alwaysShowCalendars: false
  };
  public page: any = {
    length: 100,
    pageIndex: 1,
    pageSize: 10,
    previousPageIndex: 0
  };
  public mapChart = {
    heading: 'Location based Earning', type: 'map', headingColor: '#58595B', isFooter: true,
    footerColor: '#006BFF', footer: 'Dehli', minHeight: '328px'
  };
  public mapActiveAccounts = {
    heading: 'Increase no of active accounts', type: 'countOfAccount', headingColor: '#58595B', isFooter: false,
    footerColor: '#006BFF', accountCount: '584'
  };
  public confidenceScoreList = [{ heading: 'Apollo Nov Data', count: '35,00,000', percentageCount: '48', btnLabel: 'Increase now', arrowBtn: 'up1' },
  { heading: 'Apollo Dec Data', count: '250000', percentageCount: '28', btnLabel: 'Add pharmacy', arrowBtn: 'up' },
  { heading: 'Apollo Jan Data', count: '99%', percentageCount: '28', btnLabel: 'Increase score', arrowBtn: 'up1' },
  { heading: 'Apollo Feb Data', count: '2.75', percentageCount: '28', btnLabel: 'Increase price', arrowBtn: 'up' }];
  public basicSelect = {
    placeHolder: 'Select Account',
    list: [{ title: 'Pharmacy' }],
    borderRadius: '8px'
  };
  public chartLabel: any[] = ['15 Apr 2021', '16 Apr 2021', '17 Apr 2021', '18 Apr 2021', '19 Apr 2021', '20 Apr 2021', '21 Apr 2021', '22 Apr 2021', '23 Apr 2021', '24 Apr 2021', '26 Apr 2021', '27 Apr 2021', '28 Apr 2021', '29 Apr 2021'];
  public earningSeries: any[] = [];
  public dataSeries: any[] = [];
  public basicSelectMap = {
    placeHolder: 'Select Month',
    list: [{ title: 'Last Month' }, { title: 'Current Month' }],
    borderRadius: '20px'
  };
  constructor(public router: Router, public loginService: LoginService) {
    this.loginService.chatShow = true;
    this.loginService.headerShow = 'Performance analytics';
    // colors: ['#006BFF'],
    this.chartOptions = {
      series: [63],
      chart: {
        height: 200,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '60%'
          },
          dataLabels: {
            showOn: 'always',
            name: {
              offsetY: 20,
              show: true,
              color: '#888',
              fontSize: '13px'
            },
            value: {
              color: '#111',
              fontSize: '30px',
              show: true,
              offsetY: -10,
            }
          }
        }
      },
      labels: ['2% growth'],
      dataLabels: {

        offsetY: 120
      }

    };
  }

  ngOnInit(): void {
    this.earningSeries = [
      {
        name: '', data: [65013, 59013, 80013, 54013, 46013, 75013, 70013, 65013, 59013, 77013, 70013, 56013, 45013, 40013],
        color: '#006bff'
      },
    ];
    this.dataSeries = [
      { name: 'Total Data', data: [65013, 59013, 80013, 54013, 46013, 75013, 70013, 65013, 59013, 77013, 70013, 56013, 45013, 40013], color: '#006bff' },
      {
        name: 'Approved Data', data: [55013, 54013, 72013, 65013, 51013, 50013, 45013, 60013, 65013, 72013, 65013, 87013, 50013, 44013],
        color: '#05d672'
      }
    ];
    this.gridList = [
      {
        icon: 'fa-database',
        updateCount: '50%',
        dataHeading: 'Total Earning (Rs.)',
        dataCount: '11,00,000',
        dataSubHeading: 'Potential Earnings',
        dataSubCount: '22,00,000',
      },
      {
        icon: 'fa-plus-circle',
        updateCount: '50%',
        dataHeading: 'Total accounts',
        dataCount: '35,000',
        dataSubHeading: 'Active accounts',
        dataSubCount: '12,000',
        imgIcon: 'assets/img/PlusCircleGreen.svg'
      }
      ,
      {
        icon: 'fa-database',
        updateCount: '28%',
        dataHeading: 'Total data points',
        dataCount: '61,386',
        dataSubHeading: 'No of times consumed',
        dataSubCount: '1000',
        imgIcon: 'assets/img/databaseULGreen.svg'
      }
    ];

    this.tableCol = [
      {
        name: 'Name of pharmacies',
        key: 'nameOfPharmacies',

      },
      {
        name: 'pincode',
        key: 'pincode',
        type: 'number'
      },
      {
        name: 'Data points ',
        key: 'dataPoints',
        type: 'date'
      },
      {
        name: 'Confidence Score',
        key: 'confidenceScore',
        type: 'radialBar',
        bgColor: 'red',
        textAlign: 'center'
      },
      {
        name: 'Earnings',
        key: 'earnings'
      },
      {
        name: '',
        key: 'double',
        type: 'btnImgDropdown',
        linkImg: 'assets/img/doubleDotGreen.svg',
        dropDownOptions: [{ title: 'View', icon: 'fa-eye' }]//, { title: 'Delete', icon: 'fa-trash' }]

      }
    ];
    this.tableData = [
      {
        dataPoints: '12/13/2020',
        pincode: 63733,
        confidenceScore: 25,
        series: [25],
        earnings: '63,733',
        nameOfPharmacies: 'Best Care Pharmacy',
        fill: {
          colors: ['#ec1c24']
        },
      }, {
        dataPoints: '12/13/2020',
        pincode: 63733,
        confidenceScore: 50,
        series: [50],
        earnings: '63,733',
        nameOfPharmacies: 'Pharmacy Apollo',
        fill: {
          colors: ['#f8d33e']
        },
      },
      {
        dataPoints: '12/13/2020',
        pincode: 63733,
        confidenceScore: 75,
        series: [75],
        earnings: '63,733',
        nameOfPharmacies: 'Medilane Pharmacy',
        fill: {
          colors: ['#05d672']
        },
      },

      {
        dataPoints: '12/13/2020',
        pincode: 63733,
        confidenceScore: 85,
        series: [85],
        earnings: '63,733',
        nameOfPharmacies: 'Healthy Pharmacy',
        fill: {
          colors: ['#05d672']
        },
      }
    ];
    // this.tableData.sort((a: any, b: any) => a.paymentStatus.localeCompare(b.paymentStatus));
    this.tableObj.tableData = this.tableData;
    this.tableObj.tableCol = this.tableCol;
    this.tableObj.tableHeader = 'Leaderboard';
    this.tableObj.isPagination = true;
  }
  pageChange(event: any): void {
    this.page = event;
    console.log('pagination ' + event.pageIndex);
  }
  selectedDateRange(event: any): void {
    console.log(event);
  }
  downloadFile(): void {
    const link = document.createElement('a');
    link.download = 'filename';
    link.href = 'assets/images/user-image.png';
    link.click();
  }

  checkdedValue(event: string): void {
    console.log(event);
    if (event === 'Pharmacy') {
      this.router.navigate(['/theRxData/analytics/insights']);
    }
  }
  viewDeleteEvent(event: any) {
    if (event === 'View') {
      this.router.navigate(['/theRxData/analytics/insights']);
    } else if (event === 'Delete') {

    }
  }
}
