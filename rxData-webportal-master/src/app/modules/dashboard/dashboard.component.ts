import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public heading = '';
  public gridList: any[] = [];
  public progressMeter: any = {};
  public tableData: any;
  public tableCol: any;
  public tableObj: any = {};
  public dateRangePickerOptions: any = {
    locale: { format: 'DD-MM-YYYY' },
    alwaysShowCalendars: false
  };

  public dataSeries: any[] = [];
  public dataSeries1: any[] = [];
  public chartLabel: any[] = ['15 Apr 2021', '16 Apr 2021', '17 Apr 2021', '18 Apr 2021', '19 Apr 2021', '20 Apr 2021', '21 Apr 2021', '22 Apr 2021', '23 Apr 2021', '24 Apr 2021', '26 Apr 2021', '27 Apr 2021', '28 Apr 2021', '29 Apr 2021'];
  public radarChart = { heading: 'Data Quality', type: 'radar', headingColor: '#58595B' };
  public mapChart = {
    heading: 'Location based Earning', type: 'map', headingColor: '#58595B',
    isFooter: true, footerColor: '#006BFF', footer: 'Delhi'
  };
  public performersList = [{
    heading: 'Earnings (Rs.)', count: '35,00,000', percentageCount: '48',
    btnLabel: 'Increase now', arrowBtn: 'up'
  },
  { heading: 'Active accounts', count: '250000', percentageCount: '28', btnLabel: 'Add pharmacy', arrowBtn: 'up' },
  { heading: 'Confidence score', count: '99%', percentageCount: '28', btnLabel: 'Increase score', arrowBtn: 'up' },
  { heading: 'Data price (Rs.)', count: '2.75', percentageCount: '28', btnLabel: 'Increase price', arrowBtn: 'up' },
  { heading: 'Frequency (per month)', count: '3', percentageCount: '28', btnLabel: 'Increase yours', arrowBtn: 'up' }];
  constructor(public router: Router,public loginService: LoginService) {
    this.loginService.chatShow = true;
    this.loginService.headerShow = 'Welcome back, Joe';
  }
  public basicSelectMap = {
    placeHolder: 'Select Month',
    list: [{ title: 'Last Month' }, { title: 'Current Month' }],
    borderRadius: '20px'
  };
  ngOnInit(): void {
    setTimeout(() => {
      const id = document.getElementById('dashboard');
      if (id != null) {
        id.click();
      }
    }, 50);

    this.heading = 'Welcome back, Joe';
    this.dataSeries = [
      { name: '', data: [65013, 59013, 80013, 54013, 46013, 75013, 70013, 65013, 59013, 77013, 70013, 56013, 45013, 40013],
       color: '#006bff' }
    ];
    this.dataSeries1 = [
      { name: '', data: [65013, 39013, 80013, 64013, 46013, 75013, 70013, 85013, 59013, 77013, 80013, 50013, 45013, 40013],
       color: '#006bff' }
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
    ];
    this.progressMeter = {
      updateCount: '50%',
      upDown: 'up',
      dataHeading: 'Confidence Score',
      percentage: 63
    };
    this.tableCol = [
      {
        name: 'Date',
        key: 'date',
        type: 'date'
      },
      {
        name: 'Data consumption',
        key: 'dateConsumption',
        type: 'number'
      },
      {
        name: 'Amount',
        key: 'amount',
        type: 'number'
      },
      {
        name: 'Payment status',
        key: 'paymentStatus',
        type: 'status',
        bgColor: 'red'
      },
      {
        name: 'Bank',
        key: 'bank'
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
        date: '12/13/2020',
        dateConsumption: 63733,
        amount: 10000,
        paymentStatus: 'In process',
        paymentStatusTitle: 'Pending',
        bank: 'SBI',
        invoice: 'Create',
        bills: 'Download'
      }, {
        date: '12/14/2020',
        dateConsumption: 63733,
        amount: 10000,
        paymentStatus: 'In process',
        paymentStatusTitle: 'Pending',
        bank: 'SBI',
        invoice: 'Edit',
        bills: 'Download'
      },
      {
        date: '12/15/2020',
        dateConsumption: 63733,
        amount: 10000,
        paymentStatus: 'Processed',
        paymentStatusTitle: 'Done',
        bank: 'SBI',
        invoice: 'Download',
        bills: 'Download'
      },

      {
        date: '12/16/2020',
        dateConsumption: 63733,
        amount: 10000,
        paymentStatus: 'In process',
        paymentStatusTitle: 'Pending',
        bank: 'SBI',
        invoice: 'Create',
        bills: 'Download'
      },
      {
        date: '12/13/2020',
        dateConsumption: 63733,
        amount: 10000,
        paymentStatus: 'In process',
        paymentStatusTitle: 'Pending',
        bank: 'SBI',
        invoice: 'Create',
        bills: 'Download'
      }, {
        date: '12/14/2020',
        dateConsumption: 63733,
        amount: 10000,
        paymentStatus: 'In process',
        paymentStatusTitle: 'Pending',
        bank: 'SBI',
        invoice: 'Edit',
        bills: 'Download'
      },
      {
        date: '12/15/2020',
        dateConsumption: 63733,
        amount: 10000,
        paymentStatus: 'Processed',
        paymentStatusTitle: 'Done',
        bank: 'SBI',
        invoice: 'Download',
        bills: 'Download'
      },

      {
        date: '12/16/2020',
        dateConsumption: 63733,
        amount: 10000,
        paymentStatus: 'In process',
        paymentStatusTitle: 'Pending',
        bank: 'SBI',
        invoice: 'Create',
        bills: 'Download'
      }, {
        date: '12/13/2020',
        dateConsumption: 63733,
        amount: 10000,
        paymentStatus: 'In process',
        paymentStatusTitle: 'Pending',
        bank: 'SBI',
        invoice: 'Create',
        bills: 'Download'
      }, {
        date: '12/14/2020',
        dateConsumption: 63733,
        amount: 10000,
        paymentStatus: 'In process',
        paymentStatusTitle: 'Pending',
        bank: 'SBI',
        invoice: 'Edit',
        bills: 'Download'
      }
    ];
    this.tableData.sort((a: any, b: any) => a.paymentStatus.localeCompare(b.paymentStatus));
    this.tableObj.tableData = this.tableData;
    this.tableObj.tableCol = this.tableCol;
    this.tableObj.tableHeader = 'Payments';
    this.tableObj.isPagination = true;
  }
  pageChange(event: any): void {

  }
  selectedDateRange(event: any): void {
    console.log(event);
  }
  downloadFile(): void {
    const link = document.createElement('a');
    link.download = 'download.xlsx';
    link.href = 'assets/files/SellerAccount.csv';
    link.click();
  }
  checkdedValue(event: string): void {
    console.log(event);
  }
  viewDeleteEvent(event: any) {
    if (event === 'View') {
      this.router.navigate(['/theRxData/payment-view']);
    } else if (event === 'Delete') {

    }
  }
}
