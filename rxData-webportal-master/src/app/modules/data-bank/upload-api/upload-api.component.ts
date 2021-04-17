import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { BasicDialogComponent } from 'src/app/common/components/basic-dialog/basic-dialog.component';
import { LoginService } from 'src/app/service/login.service';
import { AccountsAddComponent } from '../../accounts/accounts-add/accounts-add.component';
import { PaymentViewComponent } from '../../payment/payment-view.component';
import { BankData } from '../data/bank-data';

@Component({
  selector: 'app-upload-api',
  templateUrl: './upload-api.component.html',
  styleUrls: ['./upload-api.component.scss']
})
export class UploadApiComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public heading = 'Upload Data';
  public disable = true;
  public subheading = BankData.UPLOAD_API_SUB_HEADING;
  public accountsOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' }
  ];
  public grid: any = {
    icon: 'fa-database',
    dataset: [
      {
        dataHeading: 'Total no. of data points',
        dataCount: '61,386'
      },
      {
        dataHeading: 'Data sanctity',
        dataCount: '76%'
      }
    ]
  };
  public cardDetail: any = {
    colors: ['#05d672'],
    title: 'Hight Revenue fields',
    dataset: [
      { dataHeading: 'Doctor names', dataCount: '10%' },
      { dataHeading: 'Doctor contacts', dataCount: '16%' },
      { dataHeading: 'Patient contacs', dataCount: '35%' },
      { dataHeading: 'Patient names', dataCount: '39%' }
    ]
  };
  public priceCardDetail = {
    // colors: ['#006BFF'],
    title: 'Suggested price',
    nameShow: false,
    sign: '₹',
    dataset: [
      { dataHeading: 'Apollo Nov Data', dataCount: '₹766.45', arrowBtn: 'up' },
      { dataHeading: 'Apollo Dec Data', dataCount: '₹846.53', arrowBtn: 'down' },
      { dataHeading: 'Apollo Jan Data', dataCount: '₹366.15', arrowBtn: 'down' },
      { dataHeading: 'Apollo Jan Data', dataCount: '₹366.15', arrowBtn: 'up' }
    ]
  };
  public bankFields: any[] = [];
  public bankObj: any = {};
  public basicDetails = [
    { id: 'nameDataSet', label: 'Name data Set', class: 'col-md-6' },
    { id: 'selectPharmacy', label: 'Select Pharmacy', class: 'col-md-6' },

  ];
  public aPIKeyDetails = [
    {
      id: 'testAPIKey', label: 'Test API Key', class: 'col-md-6', fontWeight: '300',
      fontFamily: 'Montserrat-Light'
    },
    {
      id: 'liveAPIKey', label: 'Live API Key', class: 'col-md-6', fontWeight: '300',
      fontFamily: 'Montserrat-Light'
    },

  ];
  public uplaodDataDetails = [
    {
      id: 'followingEndPoint', label: 'You need to call the following end point - ', class: 'col-md-6',
      fontWeight: '300',
      fontFamily: 'Montserrat-Light'
    },
    {
      id: 'followingDetails', label: 'With the following details', class: 'col-md-6', fontWeight: '300',
      fontFamily: 'Montserrat-Light'
    },

  ];
  public setPriceDetails = [
    { id: 'bidPrice', label: 'Bid Price', class: 'col-md-6' }

  ];
  public paymentsDetails = [
    { id: 'bank', label: 'Bank', class: 'col-md-6' }

  ];
  public mappedObj = {
    nameDataSet: 'Data 01', selectPharmacy: 'Apollo', testAPIKey: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi a commod',
    liveAPIKey: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exenisl ',
    followingEndPoint: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commod',
    followingDetails: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commod'
    , bidPrice: '₹555', bank: 'standard chartered Bank'
  };
  public file?: File;
  public fileUrl?: any;
  public selectedIndex: any = 0;
  public profileObj: any;
  public basicSelect = BankData.BASIC_SELECT;
  public isDropDownValue: boolean = false;
  constructor(public loginService: LoginService, public dialog: MatDialog, public router: Router) {
    this.loginService.headerShow = 'Upload Data';
    this.isDropDownValue = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("isBankDropDown"))));
    this.profileObj = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("profileObj"))));
    if (this.profileObj && this.profileObj.personalDetail && this.profileObj.personalDetail.typeOfAccount) {
      if (this.profileObj.personalDetail.typeOfAccount === 'EHR') {
        this.changeSubHeading(this.selectedIndex);
      }
    } else {
      this.subheading = BankData.UPLOAD_API_SUB_HEADING;
    }
    this.loginService.chatShow = true;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      nameData: new FormControl(''),
      accounts: new FormControl(''),
      textApiKey: new FormControl(''),
      liveApiKey: new FormControl('')
    });
  }

  onTabChanged(event: any): void {
    this.selectedIndex = event.selectedIndex;
    if (this.profileObj?.personalDetail?.typeOfAccount === 'EHR') {
      this.changeSubHeading(this.selectedIndex);
    }
  }

  changeSubHeading(index: any): void {
    switch (index) {
      case 0:
        this.subheading = BankData.UPLOAD_API_SUB_HEADING_EHR;
        this.loginService.chatShow = true;
        break;
      case 1:
        this.subheading = BankData.UPLOAD_API_SUB_HEADING_EHR1;
        this.loginService.chatShow = true;
        break;
      case 2:
        this.subheading = BankData.UPLOAD_API_SUB_HEADING_EHR2;
        this.loginService.chatShow = true;
        break;
      case 3:
        this.subheading = BankData.UPLOAD_API_SUB_HEADING_EHR3;
        this.loginService.chatShow = true;
        break;
      case 4:
        this.subheading = BankData.UPLOAD_API_SUB_HEADING_EHR4;
        this.loginService.chatShow = true;
        break;
      case 5:
        this.subheading = BankData.UPLOAD_API_SUB_HEADING_EHR5;
        this.loginService.chatShow = false;
        break;
      default:
        break;
    }
  }

  onSubmit(): void {
    const dialogRef = this.dialog.open(BasicDialogComponent, {
      data: {
        text: 'Once data verification is done and it’s consumed by a subscriber, we will notify you and payments would be processed within 60 working days in your bank accounts.',
        buttonLabel: 'Okay',
        headingText: 'Thank you for uploading the data.',
        width: '800px'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.router.navigate(['/theRxData/data-bank']);
    });
  }
  onEdit(stepper: MatStepper): void {
    stepper.previous();
  }
  openDialogPaymentView(): void {
    const dialogRef = this.dialog.open(PaymentViewComponent, {
      height: '700px',
      data: { name: 'this.name', animal: 'this.animal' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  openDialogAccountView(): void {
    const dialogRef = this.dialog.open(AccountsAddComponent, {
      height: '700px',
      data: { name: 'this.name', animal: 'this.animal' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  copyTestApiKey(): void {
    const copyText: any = document.getElementById('textApiKey');
    copyText.select();
    document.execCommand('copy');
  }

  copyLiveApiKey(): void {
    const copyText: any = document.getElementById('liveApiKey');
    copyText.select();
    document.execCommand('copy');
  }
  checkdedValue(event: string): void {
    console.log(event);
    if (event === 'Upload CSV') {
      this.router.navigate(['/theRxData/data-bank/csv']);
    }
    else if (event === 'API Integration') {
      this.router.navigate(['/theRxData/data-bank/api']);
    }
  }

}

