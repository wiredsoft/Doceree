import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BasicDialogComponent } from 'src/app/common/components/basic-dialog/basic-dialog.component';
import { FormModal } from 'src/app/modal/FormModal';
import { LoginService } from 'src/app/service/login.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'payment-setup',
  templateUrl: './payment-setup.component.html',
  styleUrls: ['./payment-setup.component.scss']
})
export class PaymentSetupComponent implements OnInit {

  public selectedIndex = 0;
  public showThanksPage = false;

  public mainHeading: string | undefined;
  public subheading: string | undefined;
  public thankYouHeading: string | undefined;
  public thankSubheading: string | undefined;
  public accInfo: string | undefined;

  constructor(public dialog: MatDialog, public loginService: LoginService,
    private readonly activateRoute: ActivatedRoute) {
    this.activateRoute.queryParams.subscribe(params => {
      this.selectedIndex = params['tabNumber'];
    });
    if (this.selectedIndex) {
      this.paymentObj = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("paymentObj"))));
    }
    this.loginService.chatShow = false;
    this.loginService.headerShow = 'Payments';
  }

  public bankDetail: FormModal[] = [];
  public accountDepart: FormModal[] = [];
  public entityDetail: FormModal[] = [];

  public bankDetailButton: any[] = [];
  public accountDepartButton: any[] = [];

  public bankDetailList: any[] = [];
  public accountDepartList: any[] = [];

  public paymentObj: any = {};

  ngOnInit(): void {
    this.initialSetup();
  }

  initialSetup(): void {
    this.mainHeading = 'Payments';
    this.subheading = 'Kindly review and submit the details, thoroughly. We only save details submitted by you. Any pending details can be completed later using the edit button.';
    this.accInfo = 'Add details of the person responsible for managing this relationship – accounts, bills and payments';
    this.accountDepart = [
      new FormModal({ value: this.paymentObj?.accountDepartment?.info, key: 'info', label: 'Add details of the person responsible for managing this relationship – accounts, bills and payments', controlType: 'label', required: false, class: 'col-sm-12' }),
      new FormModal({ value: this.paymentObj?.accountDepartment?.businessCheck, key: 'businessCheck', label: 'Same as business profile', controlType: 'checkbox', required: true, class: 'col-sm-12' }),
      new FormModal({ value: this.paymentObj?.accountDepartment?.name, key: 'name', label: 'Name', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
      new FormModal({ value: this.paymentObj?.accountDepartment?.designation, key: 'designation', label: 'Designation', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
      new FormModal({ value: this.paymentObj?.accountDepartment?.contactNo, key: 'contactNo', label: 'Contact number', controlType: 'input', required: true, type: 'number', class: 'col-sm-6' }),
      new FormModal({ value: this.paymentObj?.accountDepartment?.email, key: 'email', label: 'Email', controlType: 'input', required: true, type: 'email', class: 'col-sm-6' }),
    ];
    this.bankDetail = [
      new FormModal({
        value: this.paymentObj?.bankDetail?.bankName, key: 'bankName', label: 'Bank name', controlType: 'input', required: true,
        type: 'text', class: 'col-sm-6'
      }),
      new FormModal({ value: this.paymentObj?.bankDetail?.bankAddress, key: 'bankAddress', label: 'Bank Address', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
      new FormModal({ value: this.paymentObj?.bankDetail?.accountNo, key: 'accountNo', label: 'Account number', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
      new FormModal({
        value: this.paymentObj?.bankDetail?.ifscCode, key: 'ifscCode', label: 'IFSC code', controlType: 'input', required: true,
        type: 'text', class: 'col-sm-6'
      }),
      new FormModal({ value: this.paymentObj?.bankDetail?.accountNo, key: 'accountNo', label: 'Confirm Account number', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
      new FormModal({ value: this.paymentObj?.bankDetail?.entryDetails, key: 'entryDetails', label: '', controlType: 'heading', class: 'col-sm-6' }),

      new FormModal({ value: this.paymentObj?.bankDetail?.entryDetails, key: 'entryDetails', label: 'Entity Details', controlType: 'heading', class: 'col-sm-2' }),
      new FormModal({ value: false, key: 'businessCheck', label: 'Same as business details', controlType: 'checkbox', required: true, class: 'col-sm-9' }),
      new FormModal({ value: this.paymentObj?.bankDetail?.company, key: 'company', label: 'Company Name', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
      new FormModal({ value: this.paymentObj?.bankDetail?.entityPan, key: 'entityPan', label: 'Entity PAN', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
      new FormModal({ value: this.paymentObj?.bankDetail?.entityAddress, key: 'entityAddress', label: 'Entity Address', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
      new FormModal({ value: this.paymentObj?.bankDetail?.city, key: 'city', label: 'Enter City', controlType: 'input', required: true, type: 'text', class: 'col-sm-3' }),
      new FormModal({ value: this.paymentObj?.bankDetail?.gstin, key: 'gstin', label: 'GSTIN', controlType: 'input', required: true, type: 'text', class: 'col-sm-3' })
    ];
    this.bankDetailButton = [
      { id: 'bankDetailNext', label: 'Next', onClick: 'bankDetailSubmit' }
    ];
    this.accountDepartButton = [
      { id: 'accountDepartmentNext', label: 'Next', onClick: 'accountDepartSubmit' }
    ];
    this.accountDepartList = [
      { id: 'name', label: 'Name', class: 'col-md-4' },
      { id: 'designation', label: 'Designation', class: 'col-md-4' },
      { id: 'contactNo', label: 'Phone Number', class: 'col-md-4' },
      { id: 'email', label: 'Email Id', class: 'col-md-4' },
      { id: 'accountType', label: 'Account type', class: 'col-md-4' }
    ];
    this.bankDetailList = [
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
    this.thankYouHeading = 'Thank You';
    this.thankSubheading = `Your banking details have been captured successfully.
                            It might take up to 72 hours to synchronize the accounts.`;
  }

  onSubmitBankDetail(event: any): void {
    // if(event.valid == 'VALID'){
    if (event.id === 'accountDepartmentNext') {
      this.paymentObj.accountDepartment = event.value;
      this.selectedIndex = 1;
    }
    if (event.id === 'bankDetailNext') {
      this.paymentObj.bankDetail = event.value;
      this.selectedIndex = 2;
    }
    // }
  }

  onTabChanged(event: any): void {
    this.selectedIndex = event.index;
  }

  goToTab(selectedIndex: number) {
    this.selectedIndex = selectedIndex;
  }

  onSubmit(): void {
    this.showThanksPage = true;
    localStorage.setItem('paymentObj', JSON.stringify(this.paymentObj));
    localStorage.setItem('selectedIndex', "1");
    localStorage.setItem('isAccountDropDown', "true");
    const dialogRef = this.dialog.open(BasicDialogComponent, {
      data: {
        text: 'Congratulations! Your Bank Details has been added.',
        buttonLabel: 'Add Accounts',
        routeInfo: '/theRxData/accounts/add',
        queryParams: { isProfile: true }
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
