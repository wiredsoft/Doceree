import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { BasicDialogComponent } from 'src/app/common/components/basic-dialog/basic-dialog.component';
import { FileHandle } from 'src/app/common/directive/dragDrop.directive';
import { LoginService } from 'src/app/service/login.service';
import { AccountData } from '../data/account-data';

@Component({
  selector: 'app-accounts-upload',
  templateUrl: './accounts-upload.component.html',
  styleUrls: ['./accounts-upload.component.scss']
})
export class AccountsUploadComponent implements OnInit {
  public heading = 'Accounts';
  public subheading = AccountData.ACCOUNT_UPLOAD_SUB_HEADING;
  public showThanksPage = false;
  public accountUploadObj: any = {};
  public progressValue = 0;
  public color: ThemePalette = undefined;
  public selectedIndex = 0;
  public fileList: any[] = [];
  public mappedFields: any[] = [];
  public mappedObj: any = {};

  public tableData: any;
  public tableCol: any = AccountData.ACCOUNT_TABLE_COLUMN;
  public tableObj: any = {};
  public file?: File;
  public uploadText = 'Uploading';
  public fileUrl?: any;
  public profileObj: any = {};
  public basicSelect = AccountData.BASIC_SELECT;
  public isDropDownValue: boolean = true;
  constructor(public dialog: MatDialog, public router: Router, public loginService: LoginService, private sanitizer: DomSanitizer) {
    this.loginService.chatShow = false;
    this.loginService.headerShow = 'Accounts';
    this.profileObj = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("profileObj"))));
    this.isDropDownValue = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("isAccountDropDown"))));
    if (this.profileObj && this.profileObj.personalDetail && this.profileObj.personalDetail.typeOfAccount) {
      this.mappedFields = this.profileObj.personalDetail.typeOfAccount === 'EHR' ? AccountData.ACCOUNT_MAPPED_EHR_DATA : AccountData.ACCOUNT_MAPPED_DATA;
      this.tableData = this.profileObj.personalDetail.typeOfAccount === 'EHR' ? AccountData.ACCOUNT_EHR_TABLE_DATA : AccountData.ACCOUNT_TABLE_DATA;
      if (this.profileObj.personalDetail.typeOfAccount === 'EHR') {
        this.changeSubHeading(this.selectedIndex);
      }
    } else {
      this.mappedFields = AccountData.ACCOUNT_MAPPED_DATA;
      this.tableData = AccountData.ACCOUNT_TABLE_DATA;
      this.subheading = AccountData.ACCOUNT_UPLOAD_SUB_HEADING;
    }

  }

  ngOnInit(): void {
    this.fileList = [
      { id: 'filesize', label: this.file?.size, class: 'col-md-12' }
    ];
    this.mappedObj = {
      pharmacyName: 'Pharmacy 01', pharmacistName: 'Pharmacist', dlNo: 'No.', organization: 'Name Org',
      gst: 'GST', panNo: 'Pan', address: 'Contact Details', pin: 'Pin'
    };
    this.tableObj.tableData = this.tableData;
    this.tableObj.tableCol = this.tableCol;
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
        this.subheading = AccountData.ACCOUNT_UPLOAD_SUB_HEADING_FOR_EHR;
        break;
      case 1:
        this.subheading = AccountData.ACCOUNT_UPLOAD_SUB_HEADING_FOR_EHR1;
        break;
      case 2:
        this.subheading = AccountData.ACCOUNT_UPLOAD_SUB_HEADING_FOR_EHR2;
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
  }

  startTimer(): void {
    const timer$ = interval(30);

    const sub = timer$.subscribe(() => {
      this.progressValue = this.progressValue + 1;

      if (this.progressValue === 100) {
        this.uploadText = 'Uploaded';
        sub.unsubscribe();
      }
    });
  }

  onEdit(stepper: MatStepper): void {
    stepper.previous();
  }

  onSubmit(): void {
    localStorage.setItem('isBankDropDown', "true");
    const dialogRef = this.dialog.open(BasicDialogComponent, {
      data: {
        text: 'Congratulations! You have added your Accounts. To start earning upload the data. ',
        buttonLabel: 'Upload Data',
        width: '800px',
        routeInfo: '/theRxData/data-bank/csv'
      }
    });
  }

  checkdedValue(event: string): void {
    console.log(event);
    if (event === 'Upload CSV') {
      this.router.navigate(['/theRxData/accounts/upload']);
    }
    else if (event === 'Manual Add') {
      this.router.navigate(['/theRxData/accounts/add']);
    }
  }
}
