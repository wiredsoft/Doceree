import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { BankData } from './data/bank-data';

@Component({
  selector: 'app-data-bank',
  templateUrl: './data-bank.component.html',
  styleUrls: ['./data-bank.component.scss']
})
export class DataBankComponent implements OnInit {

  public heading = 'Data bank';
  public subheading = 'Here, you can view all the data you have uploaded, verified and processed. ';

  public tableData: any;
  public tableCol: any;
  public tableObj: any = { tableHeaderColor: '#006bff', tableHeaderFontColor: '#ffffff' };

  public basicSelect = BankData.BASIC_SELECT;
  public dateRangePickerOptions: any = {
    locale: { format: 'DD-MM-YYYY' },
    alwaysShowCalendars: false
  };

  constructor(public router: Router, public loginService: LoginService) {
    this.loginService.headerShow = '';
    this.loginService.chatShow = true;
  }

  ngOnInit(): void {
    this.tableCol = [
      { name: 'Date',
      key: 'date',
      type: 'date' },
      { name: 'Name', key: 'name' },
      { name: 'No of cells', key: 'noOfcells' },
      { name: 'Verified data', key: 'verified' },
      { name: 'Unverified data', key: 'unverified' },
      { name: 'Bid Price', key: 'BidPrice' },
      {  name: 'Confidence Score',
      key: 'confidenceScore',
      type: 'radialBar',
      bgColor: 'red',
      textAlign: 'center' },
      { name: 'Status',  key: 'status',
      type: 'status'},
      {
        name: '',
        key: 'double',
        type: 'btnImgDropdown',
        linkImg: 'assets/img/doubleDotGreen.svg',
        dropDownOptions: [{ title: 'View', icon: 'fa-eye' }, { title: 'Delete', icon: 'fa-trash' }]

      }
    ];
 this.tableData = [
      {
        date: '12/13/2020',
        name:'Bharat phar',
        noOfcells:'100808',
        verified:'1008',
        unverified:'1008',
        BidPrice:'100808',
        confidenceScore: 78,
        series: [78],
        status: 'Processed',
        statusTitle: 'Done',
        fill: {
          colors: ['#05d672'] //green
        },
      },
      {
        date: '12/13/2020',
        name:'Bharat phar',
        noOfcells:'100808',
        verified:'....',
        unverified:'....',
        BidPrice:'100808',
        confidenceScore: 25,
        series: [25],
        status: 'In process',
        statusTitle: 'Processing',
        fill: {
          colors: ['#ec1c24']
        },
      },
      {
        date: '12/13/2020',
        name:'Bharat phar',
        noOfcells:'100808',
        verified:'1008',
        unverified:'1008',
        BidPrice:'100808',
        confidenceScore: 78,
        series: [78],
        status: 'Processed',
        statusTitle: 'Done',
        fill: {
          colors: ['#05d672'] //green
        },
      },
      {
        date: '12/13/2020',
        name:'Bharat phar',
        noOfcells:'100808',
        verified:'....',
        unverified:'....',
        BidPrice:'100808',
        confidenceScore: 25,
        series: [25],
        status: 'In process',
        statusTitle: 'Processing',
        fill: {
          colors: ['#ec1c24']
        },
      }, {
        date: '12/13/2020',
        name:'Bharat phar',
        noOfcells:'100808',
        verified:'1008',
        unverified:'1008',
        BidPrice:'100808',
        confidenceScore: 78,
        series: [78],
        status: 'Processed',
        statusTitle: 'Done',
        fill: {
          colors: ['#05d672'] //green
        },
      },
      {
        date: '12/13/2020',
        name:'Bharat phar',
        noOfcells:'100808',
        verified:'....',
        unverified:'....',
        BidPrice:'100808',
        confidenceScore: 25,
        series: [25],
        status: 'In process',
        statusTitle: 'Processing',
        fill: {
          colors: ['#ec1c24']
        },
      }, {
        date: '12/13/2020',
        name:'Bharat phar',
        noOfcells:'100808',
        verified:'1008',
        unverified:'1008',
        BidPrice:'100808',
        confidenceScore: 78,
        series: [78],
        status: 'Processed',
        statusTitle: 'Done',
        fill: {
          colors: ['#05d672'] //green
        },
      },
      {
        date: '12/13/2020',
        name:'Bharat phar',
        noOfcells:'100808',
        verified:'....',
        unverified:'....',
        BidPrice:'100808',
        confidenceScore: 25,
        series: [25],
        status: 'In process',
        statusTitle: 'Processing',
        fill: {
          colors: ['#ec1c24']
        },
      }, {
        date: '12/13/2020',
        name:'Bharat phar',
        noOfcells:'100808',
        verified:'1008',
        unverified:'1008',
        BidPrice:'100808',
        confidenceScore: 78,
        series: [78],
        status: 'Processed',
        statusTitle: 'Done',
        fill: {
          colors: ['#05d672'] //green
        },
      },
      {
        date: '12/13/2020',
        name:'Bharat phar',
        noOfcells:'100808',
        verified:'....',
        unverified:'....',
        BidPrice:'100808',
        confidenceScore: 25,
        series: [25],
        status: 'In process',
        statusTitle: 'Processing',
        fill: {
          colors: ['#ec1c24']
        },
      }];
    this.tableObj.tableData = this.tableData;
    this.tableObj.tableCol = this.tableCol;
    this.tableObj.isPagination = true;
  }

  checkdedValue(event: string): void {
    localStorage.setItem('isBankDropDown', "false");
    console.log(event);
    if (event === 'Upload CSV') {
      this.router.navigate(['/theRxData/data-bank/csv']);
    }
    else if (event === 'API Integration') {
      this.router.navigate(['/theRxData/data-bank/api']);
    }
  }

  selectedDateRange(event: any): void {
    console.log(event);
  }
  viewDeleteEvent(event: any) {
    if (event === 'View') {
      this.router.navigate(['/theRxData/data-bank/api']);
    } else if (event === 'Delete') {

    }
  }
}
