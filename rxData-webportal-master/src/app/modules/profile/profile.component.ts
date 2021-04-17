import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormModal } from 'src/app/modal/FormModal';
import { LoginService } from 'src/app/service/login.service';
declare var $: any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {
  public selectedIndex: any = 0;
  public mainHeading: string | undefined;
  public subheading: string | undefined;
  isFirstStepDone: boolean = false;
  isSecondStepDone: boolean = false;
  isThirdStepDone: boolean = false;
  isFourStepDone: boolean = false;
  isFifthStepDone: boolean = false;
  public profileObj: any = {};
  personalDetailList = [
    { id: 'name', label: 'Name', class: 'col-md-4' },
    { id: 'designation', label: 'Designation', class: 'col-md-4' },
    { id: 'contactNo', label: 'Phone Number', class: 'col-md-4' },
    { id: 'email', label: 'Email Id', class: 'col-md-4' },
    { id: 'typeOfAccount', label: 'Account type', class: 'col-md-4' }
  ];
  businessDetailList = [
    { id: 'organization', label: 'Organization Name', class: 'col-md-12' },
    { id: 'address', label: 'Address', class: 'col-md-4' },
    { id: 'country', label: 'Country', class: 'col-md-4' },
    { id: 'pin', label: 'Pin', class: 'col-md-4' },
    { id: 'panNo', label: 'PAN No.', class: 'col-md-4' },
    { id: 'gst', label: 'GST', class: 'col-md-4' },
  ];
  public paymentObj: any = {};
  accountDepartList = [
    { id: 'name', label: 'Name', class: 'col-md-4' },
    { id: 'designation', label: 'Designation', class: 'col-md-4' },
    { id: 'contactNo', label: 'Phone Number', class: 'col-md-4' },
    { id: 'email', label: 'Email Id', class: 'col-md-4' },
    { id: 'accountType', label: 'Account type', class: 'col-md-4' }
  ];
  bankDetailList = [
    { id: 'bankName', label: 'Bank Name', class: 'col-md-4' },
    { id: 'bankAddress', label: 'Bank Address', class: 'col-md-4' },
    { id: 'accountNo', label: 'Account Number', class: 'col-md-4' },
    { id: 'ifscCode', label: 'IFSC Code', class: 'col-md-4' },
    { id: 'accountType', label: 'Account type', class: 'col-md-4' },
    { id: 'company', label: 'Company Name', class: 'col-md-4' },
    { id: 'entityPan', label: 'Entity PAN', class: 'col-md-4' },
    { id: 'gstin', label: 'GSTIN', class: 'col-md-4' },
    { id: 'entityCn', label: 'Entity CN', class: 'col-md-4' },
    { id: 'entityAddress', label: 'Entity Address', class: 'col-md-4' }
  ];
  public accountsDetail: any[] = [];
  public file?: File;
  public fileUrl?: any;
  mappedFields = [
    { id: 'doctorNumber', label: 'Doctor number', class: 'col-md-4' },
    { id: 'patientNumber', label: 'Patient number', class: 'col-md-4' },
    { id: 'doctorName', label: 'Doctor name', class: 'col-md-4' },
    { id: 'patientName', label: 'Patient name', class: 'col-md-4' },
    { id: 'patientNumber', label: 'Patient number', class: 'col-md-4' },
    { id: 'date', label: 'Date', class: 'col-md-4' },
    { id: 'billNumber', label: 'Bill number', class: 'col-md-4' },
    { id: 'pharmacyAddress', label: 'Pharmacy address', class: 'col-md-4' },
    { id: 'productName', label: 'Product name', class: 'col-md-4' },
    { id: 'productPrice', label: 'Product price', class: 'col-md-4' },
    { id: 'productQuantity', label: 'Product quantity', class: 'col-md-4' },
    { id: 'taxAmount', label: 'Tax amount', class: 'col-md-4' },
    { id: 'expDate', label: 'Exp date', class: 'col-md-4' },
    { id: 'batchNumber', label: 'Batch number', class: 'col-md-4' }
  ];
  mappedObj = {
    doctorNumber: '1293748936485',
    doctorName: 'Pharmacy 01', patientNumber: '9897454', patientName: 'Test', date: '25 Dec 2021',
    billNumber: 'AQ2342', pharmacyAddress: '1 Pharmacy Address India ', productName: 'Contact Details', productPrice: '54555'
    , productQuantity: '23123123', taxAmount: '6548', expDate: '25 Dec 2021', batchNumber: '398479853'
  };

  personalDetailListAccount = [
    { id: 'name', label: 'Name', class: 'col-md-4' },
    { id: 'designation', label: 'Designation', class: 'col-md-4' },
    { id: 'contactNo', label: 'Phone Number', class: 'col-md-4' },
    { id: 'email', label: 'Email Id', class: 'col-md-4' },
    { id: 'typeOfAccount', label: 'Account type', class: 'col-md-4' }
  ];
  businessDetailListAccount = [
    { id: 'organization', label: 'Organization Name', class: 'col-md-12' },
    { id: 'address', label: 'Address', class: 'col-md-4' },
    { id: 'country', label: 'Country', class: 'col-md-4' },
    { id: 'pin', label: 'Pin', class: 'col-md-4' },
    { id: 'panNo', label: 'PAN No.', class: 'col-md-4' },
    { id: 'gst', label: 'GST', class: 'col-md-4' },
  ];
  constructor(public router: Router, public loginService: LoginService) {
    this.loginService.headerShow = 'Welcome aboard!';
    this.profileObj = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("profileObj"))));
    this.paymentObj = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("paymentObj"))));
    this.prepareAccountDetails(JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("accountsDetailValue")))));
  }

  ngOnInit(): void {
    let index = localStorage.getItem('selectedIndex');
    if (index != undefined) {
      this.selectedIndex = parseInt(index) + 1;
      for (let i = 0; i <= parseInt(index); i++) {
        // let nextBtnElement = document.getElementById(i + "");
        // if (nextBtnElement)
        this.matStepClicked(i);

      }
    }
    $('.selectedNavigate').removeClass('active');
    const id = document.getElementById('loadSideBarForProfile');
    if (id) {
      id.click();
    }

    this.mainHeading = 'Welcome aboard!';
    this.subheading = 'We are excited that you have taken the first step towards partnering us. Kindly complete the following steps and get ready for the exciting journey with us! ';
  }
  ngAfterViewInit(): void {

  }
  onEdit(): void {

  }

  onEditEvent(type: string, index: number): void {
    switch (type) {
      case 'Profile':
        this.router.navigate(['/theRxData/profile-add'], { queryParams: { tabNumber: index } });
        break;
      case 'Payments':
        this.router.navigate(['/theRxData/payment-setup'], { queryParams: { tabNumber: index } });
        break;
      case 'Account':
        this.router.navigate(['/theRxData/accounts/add'], { queryParams: { tabNumber: index } });
        break;
      case 'Upload':
        this.router.navigate(['/theRxData/data-bank/csv'], { queryParams: { tabNumber: index } });
        break;
      default:
        break;
    }
  }
  prepareAccountDetails(values: any) {
    this.accountsDetail = [
      new FormModal({
        value: values ?.Personal_Details, key: 'Personal_Details', label: 'Personal Details', controlType: 'label',
        required: false, type: 'text', class: 'col-sm-12', color: '#05d672'
      }),
      new FormModal({ value: values ?.pharmacyName, key: 'pharmacyName', label: 'Pharmacy Name', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
      new FormModal({ value: values ?.pharmacistName, key: 'pharmacistName', label: 'Pharmacist name', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
      new FormModal({ value: values ?.DL_No, key: 'DL_No.', label: 'DL No.', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
      new FormModal({
        value: values ?.Business_Details, key: 'Business_Details', label: 'Business Details', controlType: 'label',
        required: false, type: 'text', class: 'col-sm-12', color: '#05d672'
      }),
      new FormModal({
        value: values ?.organizationName, key: 'organizationName', label: 'Organization name', controlType: 'input',
        required: true, type: 'text', class: 'col-sm-6'
      }),
      new FormModal({ value: values ?.gst, key: 'gst', label: 'GST', controlType: 'input', required: true, type: 'text', class: 'col-sm-3' }),
      new FormModal({ value: values ?.PAN_No, key: 'PAN_No.', label: 'PAN No.', controlType: 'input', required: true, type: 'text', class: 'col-sm-3' }),
      new FormModal({ value: values ?.address, key: 'address', label: 'Address', controlType: 'input', required: true, type: 'text', class: 'col-sm-9' }),
      new FormModal({ value: values ?.pin, key: 'pin', label: 'PIN', controlType: 'input', required: true, type: 'text', class: 'col-sm-3' }),
    ];
  }

  onCompleteProfile(steps: number): void {
    // localStorage.setItem('selectedIndex', steps + "");
    // this.matStepClicked(steps);
    this.router.navigate(['/theRxData/profile-add']);
  }

  onCompleteBankDetails(steps: number) {
    // localStorage.setItem('selectedIndex', steps + "");
    this.router.navigate(['/theRxData/payment-setup']);
  }

  onCompleteAccountDetails(steps: number) {
    // localStorage.setItem('selectedIndex', steps + "");
    this.router.navigate(['/theRxData/accounts/add']);
  }

  onCompleteUploadDetails(steps: number) {
    // localStorage.setItem('selectedIndex', steps + "");
    this.router.navigate(['/theRxData/data-bank/csv']);
  }

  onCompleteReadyToEarn(steps: number) {
    localStorage.setItem('selectedIndex', steps + "");
    this.router.navigate(['/theRxData/dashboard']);
  }

  tabChange(event: any): void {
    // let index: any = localStorage.getItem('selectedIndex');
    // if (index === undefined || (index !== undefined && index < event.selectedIndex))
    // localStorage.setItem('selectedIndex', event.selectedIndex);
    // this.selectedIndex = event.selectedIndex;
    // this.matStepClicked(this.selectedIndex);
    // console.log(this.selectedIndex);
  }

  matStepClicked(step: any) {
    switch (step) {
      case (0):
        this.isFirstStepDone = true;
        break;
      case (1):
        this.isSecondStepDone = true;
        break;
      case (2):
        this.isThirdStepDone = true;
        break;
      case (3):
        this.isFourStepDone = true;
        break;
      case (4):
        this.isFifthStepDone = true;
        break;
      default:
        break;
    }
  }
}
