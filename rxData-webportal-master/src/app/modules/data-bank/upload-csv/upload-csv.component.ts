import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { BasicDialogComponent } from 'src/app/common/components/basic-dialog/basic-dialog.component';
import { FileHandle } from 'src/app/common/directive/dragDrop.directive';
import { LoginService } from 'src/app/service/login.service';
import { AccountsAddComponent } from '../../accounts/accounts-add/accounts-add.component';
import { PaymentViewComponent } from '../../payment/payment-view.component';
import { BankData } from '../data/bank-data';

@Component({
  selector: 'app-upload-csv',
  templateUrl: './upload-csv.component.html',
  styleUrls: ['./upload-csv.component.scss']
})
export class UploadCsvComponent implements OnInit {
  public selectedIndex = 0;
  public form: FormGroup = new FormGroup({});
  public progressValue = 0;
  public file?: File;
  public fileUrl?: any;
  public color: ThemePalette = undefined;
  public isNext = false;

  public tableData: Array<any> = BankData.BANK_TABLE_DATA;
  public tableCol: Array<any> = BankData.BANK_TABLE_COLUMN;
  public tableObj: any = {};
  public grid: any = {};
  public cardDetail: any = {};
  public priceCardDetail: any = {};
  public note: any = {};
  public mappedFields: any[] = BankData.BANK_MAPPED_FILED;
  public mappedObj: any = {};
  public bidPriceFields: any[] = [];
  public bidPriceObj: any = {};
  public bankFields: any[] = [];
  public bankObj: any = {};
  public disable = true;

  public uploadText = 'Uploading';
  public heading = 'Upload Data';
  public subheading = BankData.UPLOAD_CSV_SUB_HEADING;
  public profileObj: any;
  public pharmacyOptions = [
    // { label: 'standard chartered Bank', value: 'standard chartered Bank' },
    // { label: 'chartered Bank', value: 'standard chartered Bank' }
    { label: '', value: '' }
  ];

  public isDropDownValue: boolean = false;
  public basicSelect = BankData.BASIC_SELECT;
  constructor(private sanitizer: DomSanitizer,
    public dialog: MatDialog,
    public router: Router,
    public loginService: LoginService,
    private readonly activateRoute: ActivatedRoute) {
    this.activateRoute.queryParams.subscribe(params => {
      this.selectedIndex = params['tabNumber'];
    });
    this.isDropDownValue = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("isBankDropDown"))));
    this.profileObj = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("profileObj"))));
    if (this.profileObj && this.profileObj.personalDetail && this.profileObj.personalDetail.typeOfAccount) {
      this.tableData = this.profileObj.personalDetail.typeOfAccount === 'EHR' ? BankData.BANK_TABLE_DATA_FOR_EHR : BankData.BANK_TABLE_DATA;
      this.mappedFields = this.profileObj.personalDetail.typeOfAccount === 'EHR' ? BankData.BANK_MAPPED_FILED_FOR_EHR : BankData.BANK_MAPPED_FILED;
      this.mappedObj = this.profileObj.personalDetail.typeOfAccount === 'EHR' ? BankData.BANK_MAPPED_OBJECT_FOR_EHR : BankData.BANK_MAPPED_OBJECT;
      if(this.profileObj.personalDetail.typeOfAccount === 'EHR'){
        this.changeSubHeading(this.selectedIndex);
      }
    } else {
      this.tableData = BankData.BANK_TABLE_DATA;
      this.mappedFields = BankData.BANK_MAPPED_FILED;
      this.mappedObj = BankData.BANK_MAPPED_OBJECT;
      this.subheading = BankData.UPLOAD_CSV_SUB_HEADING;
    }
    // if (this.selectedIndex) {
    //   this.paymentObj = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("paymentObj"))));
    // }
    this.loginService.headerShow = 'Upload Data';
    this.loginService.chatShow = true;
  }

  ngOnInit(): void {
    const id = document.getElementById('loadSideBarForDataBank');
    if (id) {
      id.click();
    }
    this.form = new FormGroup({
      nameData: new FormControl(''),
      pharmacy: new FormControl(''),
      ehr: new FormControl('')
    });
    this.tableObj.tableData = this.tableData;
    this.tableObj.tableCol = this.tableCol;
    this.grid = {
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
    this.cardDetail = {
      colors: ['#05d672'],
      title: 'Hight Revenue fields',
      dataset: [
        { dataHeading: 'Doctor names', dataCount: '10%' },
        { dataHeading: 'Doctor contacts', dataCount: '16%' },
        { dataHeading: 'Patient contacs', dataCount: '35%' },
        { dataHeading: 'Patient names', dataCount: '39%' }
      ]
    };
    this.priceCardDetail = {
      title: 'Suggested price',
      nameShow: false,
      sign: '₹',
      dataset: [
        { dataHeading: 'Apollo Nov Data', dataCount: '₹766.45', arrowBtn: 'up' },
        { dataHeading: 'Apollo Dec Data', dataCount: '₹846.53', arrowBtn: 'up' },
        { dataHeading: 'Apollo Jan Data', dataCount: '₹366.15', arrowBtn: 'down' },
        { dataHeading: 'Apollo Jan Data', dataCount: '₹366.15', arrowBtn: 'up' }
      ]
    };
    this.note = {
      title: 'Notes',
      points: [
        'Payments will reflect within 2 months of Data subscription',
        'Payments will reflect on a monthly basis.'
      ]
    };
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
        this.subheading = BankData.UPLOAD_CSV_SUB_HEADING_EHR;
        this.loginService.chatShow = true;
        break;
      case 1:
        this.subheading = BankData.UPLOAD_CSV_SUB_HEADING_EHR1;
        this.loginService.chatShow = true;
        break;
      case 2:
        this.subheading = BankData.UPLOAD_CSV_SUB_HEADING_EHR2;
        this.loginService.chatShow = false;
        break;
      case 3:
        this.subheading = BankData.UPLOAD_CSV_SUB_HEADING_EHR3;
        this.loginService.chatShow = true;
        break;
      case 4:
        this.subheading = BankData.UPLOAD_CSV_SUB_HEADING_EHR4;
        this.loginService.chatShow = false;
        break;
      case 5:
        this.subheading = BankData.UPLOAD_CSV_SUB_HEADING_EHR5;
        this.loginService.chatShow = false;
        break;
      default:
        break;
    }
  }

  onFileSelect(input: HTMLInputElement): void {
    this.progressValue = 0;
    if (input.files) {
      this.file = input.files[0];
      this.fileUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(this.file));
    }
    this.startTimer();
  }

  filesDropped(event: FileHandle[]): void {
    this.progressValue = 0;
    event.map(elem => {
      this.file = elem.file;
      this.fileUrl = elem.url;
    });
    this.startTimer();
  }

  removeFile(): void {
    this.file = undefined;
    this.progressValue = 0;
    this.fileUrl = null;
    this.isNext = false;
  }

  startTimer(): void {
    const timer$ = interval(30);

    const sub = timer$.subscribe(() => {
      this.progressValue = this.progressValue + 1;

      if (this.progressValue === 100) {
        this.uploadText = 'Uploaded';
        this.isNext = true;
        sub.unsubscribe();
      }
    });
  }

  onEdit(stepper: MatStepper): void {
    console.log("previous");
    stepper.previous();
  }

  onSubmit(): void {
    localStorage.setItem('selectedIndex', "3");
    const dialogRef = this.dialog.open(BasicDialogComponent, {
      data: {
        text: 'Once data verification is done and it’s consumed by a subscriber, we will notify you and payments would be processed within 60 working days in your bank accounts.',
        buttonLabel: 'Okay',
        headingText: 'Thank you for uploading the data.',
        width: '800px',
        routeInfo: '/theRxData/dashboard'
      }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.router.navigate(['/theRxData/data-bank']);
    // });
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
