import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public selectedItem = {};
  public pendingObj: any = {};
  constructor(public router: Router) { }
  public menus = [{ name: 'Dashboard', id: 'dashboard', icon: 'assets/img/Dashboard.svg', iconHover: 'assets/img/DashboardHover.svg', link: '/theRxData/dashboard', classHW: '' },
  { name: 'Accounts', id: 'accounts', icon: 'assets/img/Accounts.svg', iconHover: 'assets/img/AccountsHover.svg', link: '/theRxData/accounts', classHW: '' },
  { name: 'Data Bank', id: 'databank', icon: 'assets/img/DataBank.svg', iconHover: 'assets/img/DataBankHover.svg', link: '/theRxData/data-bank', classHW: 'img-big' },
  { name: 'Analytics', id: 'analytics', icon: 'assets/img/Analytic.svg', iconHover: 'assets/img/AnalyticsHover.svg', link: '/theRxData/analytics', classHW: 'img-big' },
  ];
  ngOnInit(): void {
  }
  onSelectMenu(menu: any): void {
    this.selectedItem = menu.name;
    console.log('test  ' + menu.name);
    this.router.navigate([menu.link]);
    this.pendingObj.type = menu.name;
    if (menu.name === 'Dashboard') {
      this.pendingObj.heading = 'Did you know?';
    }
    else if (menu.name === 'Accounts' || menu.name === 'Data Bank') {
      this.pendingObj.heading = 'Did you know?';
      this.pendingObj.details = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam';
    }
    // else if(menu.name=='Data Bank'){
    //   this.pendingObj.heading='Pending Payments!'
    //   this.pendingObj.details=' Your 11 payments are pending to encash the payment in current
    //   bill cycle upload the invoice between 1-7 of the month'
    // }
  }

  loadSideBarForProfile(): void {
    this.selectedItem = 'Profile';
    this.pendingObj.type = 'Profile';
  }
  loadSideBarForPayment(): void {
    this.selectedItem = 'Payments';
    this.pendingObj.type = 'Payments';
    this.pendingObj.heading = 'Pending Payments!';
    this.pendingObj.details = ' Your 11 payments are pending to encash the payment in current bill cycle upload the invoice between 1-7 of the month';

  }
  uploadData() {
    this.selectedItem = 'Data Bank';
    this.pendingObj.type = 'Data Bank';
      this.router.navigate(['/theRxData/data-bank/csv']);
  }
  loadSideBarForAccount(){
    this.selectedItem = 'Accounts';
    this.pendingObj.type = 'Accounts';
   
      this.pendingObj.heading = 'Did you know?';
      this.pendingObj.details = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam';
    
  }
  loadSideBarForDataBank(){
    this.selectedItem = 'Data Bank';
    this.pendingObj.type = 'Data Bank';
    
      this.pendingObj.heading = 'Did you know?';
      this.pendingObj.details = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam';
    
  }
}
