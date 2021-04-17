import { Component, OnInit, Optional } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicDialogComponent } from 'src/app/common/components/basic-dialog/basic-dialog.component';
import { FormModal } from 'src/app/modal/FormModal';
import { LoginService } from 'src/app/service/login.service';
import { AccountData } from '../data/account-data';

@Component({
  selector: 'app-accounts-add',
  templateUrl: './accounts-add.component.html',
  styleUrls: ['./accounts-add.component.scss']
})
export class AccountsAddComponent implements OnInit {
  public heading = 'Accounts';
  public subheading = 'Please complete personal and business details of your pharmacy partner. We will then add them to your existing account list.';
  public accountsDetail = [
    new FormModal({
      value: '', key: 'Personal_Details', label: 'Personal Details', controlType: 'label',
      required: false, type: 'text', class: 'col-sm-12', color: '#05d672'
    }),
    new FormModal({ value: '', key: 'pharmacyName', label: 'Pharmacy Name', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
    new FormModal({ value: '', key: 'pharmacistName', label: 'Pharmacist name', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
    new FormModal({ value: '', key: 'DL_No.', label: 'Drug Licence Number', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
    new FormModal({
      value: '', key: 'Business_Details', label: 'Business Details', controlType: 'label',
      required: false, type: 'text', class: 'col-sm-12', color: '#05d672'
    }),
    new FormModal({
      value: '', key: 'organizationName', label: 'Organization name', controlType: 'input',
      required: true, type: 'text', class: 'col-sm-6'
    }),
    new FormModal({ value: '', key: 'gst', label: 'GST', controlType: 'input', required: true, type: 'text', class: 'col-sm-3' }),
    new FormModal({ value: '', key: 'PAN_No.', label: 'PAN No.', controlType: 'input', required: true, type: 'text', class: 'col-sm-3' }),
    new FormModal({ value: '', key: 'address', label: 'Address', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
    new FormModal({ value: '', key: 'city', label: 'City', controlType: 'input', required: true, type: 'text', class: 'col-sm-3' }),
    new FormModal({ value: '', key: 'pin', label: 'PIN', controlType: 'input', required: true, type: 'text', class: 'col-sm-3' }),
  ];
  public accountAddButton = [
    { id: 'accountAdd', label: 'Add' }
  ];
  isProfile: boolean = false;
  public basicSelect = AccountData.BASIC_SELECT;
  public isDropDownValue: boolean = false;
  constructor(@Optional() public dialogRef: MatDialogRef<AccountsAddComponent>,
    public dialog: MatDialog,
    public router: Router,
    public loginService: LoginService,
    private readonly activateRoute: ActivatedRoute) {
    this.loginService.chatShow = false;
    this.loginService.headerShow = 'Accounts';
    this.activateRoute.queryParams.subscribe(params => {
      this.isProfile = params['isProfile'];
    });
    this.isDropDownValue = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("isAccountDropDown"))));
  }

  ngOnInit(): void {
    const id = document.getElementById('loadSideBarForAccount');
    if (id) {
      id.click();
    }
  }

  onSubmitDetail(event: any): void {
    if (this.dialogRef != null) {
      this.dialogRef.close();
    }
    else
      if (event.id === 'accountAdd') {
        localStorage.setItem('accountsDetailValue', JSON.stringify(event.value));
        localStorage.setItem('selectedIndex', "2");
        localStorage.setItem('isBankDropDown', "true");
        const dialogRef = this.dialog.open(BasicDialogComponent, {
          data: {
            text: 'Congratulations! You have added your Accounts. To start earning upload the data. ',
            buttonLabel: 'Upload Data',
            width: '800px',
            routeInfo: '/theRxData/data-bank/csv'
          }
        });
        // if (!this.isProfile) {
        //   dialogRef.afterClosed().subscribe(result => {
        //     console.log('The dialog was closed');
        //     this.router.navigate(['/theRxData/accounts']);
        //   });
        // }
      }
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
