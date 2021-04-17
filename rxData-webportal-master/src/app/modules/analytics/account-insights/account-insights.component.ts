import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexChart, ApexNonAxisChartSeries, ApexPlotOptions } from 'ng-apexcharts';
import { LoginService } from 'src/app/service/login.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-account-insights',
  templateUrl: './account-insights.component.html',
  styleUrls: ['./account-insights.component.scss']
})
export class AccountInsightsComponent implements OnInit {
  @ViewChild('chart') chart: any;
  public chartOptions: any; // Partial<ChartOptions>;

  public heading = 'Account Insights';
  public gridList: any[] = [];
  public dateRangePickerOptions: any = {
    locale: { format: 'DD-MM-YYYY' },
    alwaysShowCalendars: false
  };
  public mapActiveAccounts = { percentageCount:'28',btnIncreaseNow: true, heading: '% of data consumed', type: 'countOfAccount', headingColor: '#58595B', isFooter: false, footerColor: '#006BFF' };
  public confidenceScoreList = [
    { heading: 'Doctor Name', count: '250000', percentageCount: '28', btnLabel: 'Add pharmacy', arrowBtn: 'up' },
    { heading: 'Doctor Contact', count: '99%', percentageCount: '28', btnLabel: 'Increase score', arrowBtn: 'up1' },
    { heading: 'Patient Name', count: '2.75', percentageCount: '28', btnLabel: 'Increase price', arrowBtn: 'up' },
  { heading: 'Patient Contact', count: '35,00,000', percentageCount: '48', btnLabel: 'Increase now', arrowBtn: 'up1' }
  ];
  public basicSelect = {
    placeHolder: 'Select Pharmacy',
    list: [{ title: 'Raise invoice' }],
    borderRadius: '8px'
  };
  public chartLabel: any[] = ['15 Apr 2021', '16 Apr 2021', '17 Apr 2021', '18 Apr 2021', '19 Apr 2021', '20 Apr 2021', '21 Apr 2021', '22 Apr 2021', '23 Apr 2021', '24 Apr 2021', '26 Apr 2021', '27 Apr 2021', '28 Apr 2021', '29 Apr 2021'];
  public dataSeries: any[] = [];
  public earningSeries: any[] = [];
  public basicSelectMap = {
    placeHolder: 'Select Month',
    list: [{ title: 'Last Month' }, { title: 'Current Month' }],
    borderRadius: '20px'
  };
  public infoList = [
    {
      key: 'Organization',
      value: 'Apollo Pharmacy'
    },
    {
      key: 'Account',
      value: 'Pharmacy South x'
    },
    {
      key: 'Location',
      value: 'Q-56, South x Part 2, Delhi'
    }
  ];
  public progressMeter = {
    updateCount: '28%',
    upDown: 'up',
    dataHeading: 'Confidence Score',
    percentage: 63
  };
  constructor(public loginService: LoginService) {
    this.loginService.chatShow = true;
    this.loginService.headerShow = 'Account Insights';
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
            show: true,
            name: {
                show: true,
                fontSize: '10px',
                fontFamily: undefined,
                fontWeight: 600,
                color: undefined,
                offsetY: 25
              },
              value: {
                show: true,
                fontSize: '22px',
                fontFamily: undefined,
                fontWeight: 400,
                color: undefined,
                offsetY: -10,
                formatter(val: any): any {
                  return val + '%';
                }
              }
          }
        }
      },
      labels: ['Completed']
    };
  }

  ngOnInit(): void {
    this.dataSeries = [
      { name: '', data: [65013, 59013, 80013, 54013, 46013, 75013, 70013, 65013, 59013, 77013, 70013, 56013, 45013, 40013] },
      { name: '', data: [55013, 54013, 72013, 65013, 51013, 50013, 45013, 60013, 65013, 72013, 65013, 87013, 50013, 44013] }
    ];
    this.earningSeries = [
      { name: '', data: [65013, 59013, 80013, 54013, 46013, 75013, 70013, 65013, 59013, 77013, 70013, 56013, 45013, 40013]  },
    ];
    this.gridList = [
      {
        icon: 'fa-database',
        updateCount: '28%',
        dataHeading: 'Total Earning (Rs.)',
        dataCount: '613,869',
        dataSubHeading: 'Potential Earnings',
        dataSubCount: '977,863,87',
      },
      {
        icon: 'fa-plus-circle',
        updateCount: '28%',
        dataHeading: 'Total Approved Data',
        dataCount: '519,876',
        dataSubHeading: 'Total Data Uploaded',
        dataSubCount: '678,934',
        upDown: 'up',
        imgIcon: 'assets/img/PlusCircleGreen.svg'
      }
      ,
      {
        icon: 'fa-plus-circle',
        updateCount: '28%',
        dataHeading: 'No of times consumed',
        dataCount: '61,386',
        dataSubHeading: 'Total Data Points',
        dataSubCount: '38,625',
        upDown: 'up',
        imgIcon: 'assets/img/PlusCircleGreen.svg'
      }
    ];


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
  }
}

