import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { AccountData } from './data/account-data';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  public heading = 'Accounts';
  public subheading = AccountData.SUB_HEADING;
  public dateRangePickerOptions: any = {
    locale: { format: 'DD-MM-YYYY' },
    alwaysShowCalendars: false
  };
  public basicSelect = AccountData.BASIC_SELECT;
  public tableData: any = AccountData.TABLE_DATA;
  public tableCol: any = AccountData.TABLE_COLUMN_DATA;
  public tableObj: any = { tableHeaderColor: '#006bff', tableHeaderFontColor: '#ffffff' };
  public profileObj: any;
  constructor(public router: Router, public loginService: LoginService) {
    this.loginService.chatShow = false;
    this.loginService.headerShow = '';
    this.profileObj = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("profileObj"))));
    if (this.profileObj && this.profileObj.personalDetail && this.profileObj.personalDetail.typeOfAccount) {
      this.subheading = this.profileObj.personalDetail.typeOfAccount === 'EHR' ? AccountData.SUB_HEADING_FOR_EHR : AccountData.SUB_HEADING;
    } else {
      this.subheading = AccountData.SUB_HEADING;
    }

  }

  ngOnInit(): void {
    this.tableObj.tableData = this.tableData;
    this.tableObj.tableCol = this.tableCol;
  }
  selectedDateRange(event: any): void {
    console.log(event);
  }

  checkdedValue(event: string): void {
    console.log(event);
    localStorage.setItem('isAccountDropDown', "false");
    if (event === 'Upload CSV') {
      this.router.navigate(['/theRxData/accounts/upload']);
    }
    else if (event === 'Manual Add') {
      this.router.navigate(['/theRxData/accounts/add']);
    }
  }
}
