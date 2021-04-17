import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
declare var $: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  providers: [MatDatepickerModule]
})
export class PaymentComponent implements OnInit {
  public mainHeading: string | undefined;
  public subheading: string | undefined;
  public gridList: any = [];
  public manageAccount: any;
  public tableData: any;
  public tableCol: any;
  public tableObj: any = {};
  public daterange: any = {};
  public basicSelect = {
    headerIcon: 'fa fa-filter',
    placeHolder: 'Sort By',
    list: [{ title: 'Raise invoice', icon: 'fa fa-files-o' }, { title: 'In process', icon: 'fa fa-cog' }, { title: 'Processed', icon: 'fa fa-check' }]
  };
  public dateRangePickerOptions: any = {
    locale: { format: 'DD-MM-YYYY' },
    alwaysShowCalendars: false
  };
  constructor(public router: Router, public loginService: LoginService) {
    this.loginService.chatShow = false;
    this.loginService.headerShow = 'Payments';
  }

  ngOnInit(): void {
    this.initialSetup();
    const id = document.getElementById('loadSideBarForPayment');
    if (id) {
      id.click();
    }
  }
  selectedDateRange(event: any): void {
    console.log(event);
  }
  checkdedValue(event: string): void {
    console.log(event);
  }
  initialSetup(): void {
    this.mainHeading = 'Payments';
    this.subheading = 'Review account level insights to understand total earnings v/s potential earnings, total approved data and total subscriptions for every account registered under you.';
    this.gridList = [
      {
        icon: 'fa-database',
        updateCount: '50%',
        dataHeading: 'Total Earning',
        dataCount: '613,869'

      },
      {
        icon: 'fa-database',
        updateCount: '50%',
        dataHeading: 'Total Updates',
        dataCount: '13,869'

      }
    ];
    this.manageAccount = [
      'Alabama', 'Alaska', 'Arizona'
    ];
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
        name: 'Invoice',
        key: 'invoice',
        type: 'link',
        color: '#05D672',
        icon: 'fa fa-download'
      },
      {
        name: 'Bills',
        key: 'bills',
        type: 'btnImg',
        color: '#006BFF',
        icon: 'fa fa-download',
        linkImg: 'assets/img/DownloadBlue.svg'

      }
    ];
    this.tableData = [

      {
        date: '12/13/2020',
        dateConsumption: 63733,
        amount: 10000,
        paymentStatus: 'In process',
        paymentStatusTitle: 'In process',
        bank: 'SBI',
        invoice: 'Create',
        btnImgDataKey:'PlusCircleGreenSmall.svg',
        bills: 'Download',
        billsDisabled: true
      },
       {
        date: '12/14/2020',
        dateConsumption: 63733,
        amount: 10000,
        paymentStatus: 'In process',
        paymentStatusTitle: 'In process',
        bank: 'SBI',
        invoice: 'Edit',
        btnImgDataKey:'EditGreen.svg',
        bills: 'Download',
        billsDisabled: true
      },
      {
        date: '12/15/2020',
        dateConsumption: 63733,
        amount: 10000,
        paymentStatus: 'Processed',
        paymentStatusTitle: 'Processed',
        bank: 'SBI',
        invoice: 'Download',
        btnImgDataKey:'DownloadGreen.svg',
        bills: 'Download'
      },

      {
        date: '12/16/2020',
        dateConsumption: 63733,
        amount: 10000,
        paymentStatus: 'Raise invoice',
        paymentStatusTitle: 'Raise invoice',
        bank: 'SBI',
        invoice: 'Create',
        btnImgDataKey:'PlusCircleGreenSmall.svg',
        bills: 'Download',
        billsDisabled: true
      },
      {
        date: '12/13/2020',
        dateConsumption: 63733,
        amount: 10000,
        paymentStatus: 'In process',
        paymentStatusTitle: 'In process',
        bank: 'SBI',
        invoice: 'Create',
        btnImgDataKey:'PlusCircleGreenSmall.svg',
        bills: 'Download',
        billsDisabled: true
      }, {
        date: '12/14/2020',
        dateConsumption: 63733,
        amount: 10000,
        paymentStatus: 'In process',
        paymentStatusTitle: 'In process',
        bank: 'SBI',
        invoice: 'Edit',
        btnImgDataKey:'EditGreen.svg',
        bills: 'Download',
        billsDisabled: true
      },
      {
        date: '12/15/2020',
        dateConsumption: 63733,
        amount: 10000,
        paymentStatus: 'Processed',
        paymentStatusTitle: 'Processed',
        bank: 'SBI',
        invoice: 'Download',
        btnImgDataKey:'DownloadGreen.svg',
        bills: 'Download'
      },

      {
        date: '12/16/2020',
        dateConsumption: 63733,
        amount: 10000,
        paymentStatus: 'Raise invoice',
        paymentStatusTitle: 'Raise invoice',
        bank: 'SBI',
        invoice: 'Create',
        btnImgDataKey:'PlusCircleGreenSmall.svg',
        bills: 'Download',
        billsDisabled: true
      }

    ];
    this.tableData.sort((a: any, b: any) => a.paymentStatus.localeCompare(b.paymentStatus));
    this.tableObj.tableData = this.tableData;
    this.tableObj.tableCol = this.tableCol;
    this.tableObj.tableHeader = 'Payments History';
  }
  addEditEvent(event: any): void {
    console.log(event);
    if (event.object === 'Create') {
      this.router.navigate(['/theRxData/payment-view']);
    }
  }
  mangeSettingEvent(): void {
    console.log('mangeSettingEvent');

    this.router.navigate(['/theRxData/payment-setup']);
  }
}
