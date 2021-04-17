import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BasicDialogComponent } from 'src/app/common/components/basic-dialog/basic-dialog.component';
import { FormModal } from 'src/app/modal/FormModal';
import { LoginService } from 'src/app/service/login.service';
import { ProfileData } from '../data/profile-data';

@Component({
  selector: 'app-profile-add',
  templateUrl: './profile-add.component.html',
  styleUrls: ['./profile-add.component.scss']
})
export class ProfileAddComponent implements OnInit {

  public selectedIndex = 0;
  public showThanksPage = false;

  public mainHeading: string | undefined;
  public subheading: string = ProfileData.SUB_HEADING;

  public personaldetails: FormModal[] = [];
  public businessDetails: FormModal[] = [];

  public personalDetailButton: any[] = [];
  public businessDetailButton: any[] = [];

  public personalDetailList: any[] = ProfileData.PROFILE_PERSONAL_DETAIL;
  public businessDetailList: any[] = ProfileData.PROFILE_BUSINESS_DETAIL;

  public accountType: any[] = ProfileData.ACCOUNT_TYPE;
  public profileObj: any = {};

  constructor(public dialog: MatDialog, public loginService: LoginService,
    private readonly activateRoute: ActivatedRoute) {
    this.activateRoute.queryParams.subscribe(params => {
      this.selectedIndex = params['tabNumber'];
    });
    if (this.selectedIndex) {
      this.profileObj = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("profileObj"))));
    }
    if (this.profileObj?.personalDetail?.typeOfAccount === 'EHR') {
      this.changeSubHeading(this.selectedIndex);
    }
    this.loginService.headerShow = 'Profile';
    this.loginService.chatShow = true;
  }

  ngOnInit(): void {
    this.mainHeading = 'Profile';
    this.personaldetails = [
      new FormModal({ value: this.profileObj?.personalDetail?.name, key: 'name', label: 'Name', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
      new FormModal({ value: this.profileObj?.personalDetail?.designation, key: 'designation', label: 'Designation', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
      new FormModal({ value: this.profileObj?.personalDetail?.email, key: 'email', label: 'Email Id', controlType: 'input', required: true, type: 'email', class: 'col-sm-6' }),
      new FormModal({ value: this.profileObj?.personalDetail?.contactNo, key: 'contactNo', label: 'Phone No.', controlType: 'input', required: true, type: 'number', class: 'col-sm-6' }),
      new FormModal({
        value: this.profileObj?.personalDetail?.typeOfAccount, key: 'typeOfAccount', label: 'Account Type', controlType: 'select', required: true,
        class: 'col-sm-6', options: this.accountType
      }),
    ];
    this.businessDetails = [
      new FormModal({ value: this.profileObj?.businessDetail?.organization, key: 'organization', label: 'Register Entity', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
      new FormModal({ value: this.profileObj?.businessDetail?.productName, key: 'productName', label: 'Business Name', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
      new FormModal({ value: this.profileObj?.businessDetail?.address, key: 'address', label: 'Address', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
      new FormModal({ value: this.profileObj?.businessDetail?.country, key: 'country', label: 'Country', controlType: 'input', required: true, type: 'text', class: 'col-sm-3' }),
      new FormModal({ value: this.profileObj?.businessDetail?.pin, key: 'pin', label: 'Pin', controlType: 'input', required: true, type: 'number', class: 'col-sm-3' }),
      new FormModal({ value: this.profileObj?.businessDetail?.panNo, key: 'panNo', label: 'PAN No.', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
      new FormModal({ value: this.profileObj?.businessDetail?.gst, key: 'gst', label: 'GST', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' })
    ];
    this.personalDetailButton = [
      { id: 'personalDetailNext', label: 'Next' }
    ];
    this.businessDetailButton = [
      { id: 'businessDetailNext', label: 'Next' }
    ];
  }

  onTabChanged(event: any): void {
    this.selectedIndex = event.index;
    if (this.profileObj?.personalDetail?.typeOfAccount === 'EHR') {
      this.changeSubHeading(this.selectedIndex);
    }
  }

  changeSubHeading(index: any): void {
    switch (index) {
      case 0:
        this.subheading = ProfileData.SUB_HEADING;
        break;
      case 1:
        this.subheading = ProfileData.SUB_HEADING2;
        break;
      case 2:
        this.subheading = ProfileData.SUB_HEADING3;
        break;
      default:
        break;
    }
  }

  onSubmitPersonalDetail(event: any): void {
    // if (event.valid !== 'INVALID') {
    this.profileObj.personalDetail = event.value;
    this.selectedIndex = 1;
    // }
  }

  onSubmitBusinessDetail(event: any): void {
    // if (event.valid !== 'INVALID') {
    this.profileObj.businessDetail = event.value;
    this.selectedIndex = 2;
    // }
  }

  onSubmit(): void {
    localStorage.setItem("profileObj", JSON.stringify(this.profileObj));
    this.showThanksPage = true;
    this.mainHeading = 'Thank you!';
    this.subheading = 'Your business profile has been created. Please add your banking details to help us serve you better.';
    localStorage.setItem('selectedIndex', "0");
    const dialogRef = this.dialog.open(BasicDialogComponent, {
      data: {
        text: 'Congratulations! Your profile has been created. ',
        buttonLabel: 'Add you bank details',
        routeInfo: '/theRxData/payment-setup'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
