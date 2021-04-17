import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { Router } from '@angular/router';
import { DataBankComponent } from '../../data-bank/data-bank.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: DataBankComponent },
        ]),
      ],
    })
    .compileComponents();
    router = TestBed.get(Router); // Just if we need to test Route Service functionality
    router.initialNavigation();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Calling Methods', () => {
    it('should loadSideBarForProfile method called ', () => {
      component.loadSideBarForProfile();
      expect(component.selectedItem)
      .toEqual('Profile');
    });
    it('should loadSideBarForPayment method called ', () => {
      component.loadSideBarForPayment();
      expect(component.selectedItem)
      .toEqual('Payments');
    });
    it('should onSelectMenu method called ', () => {
      component.pendingObj = {
        type: 'demo'
      };
      let menu = [{ name: 'Dashboard', id: 'dashboard', icon: 'assets/img/Dashboard.svg', iconHover: 'assets/img/DashboardHover.svg', link: '/theRxData/dashboard', classHW: '' },
      { name: 'Accounts', id: 'accounts', icon: 'assets/img/Accounts.svg', iconHover: 'assets/img/AccountsHover.svg', link: '/theRxData/accounts', classHW: '' },
      { name: 'Data Bank', id: 'databank', icon: 'assets/img/DataBank.svg', iconHover: 'assets/img/DataBankHover.svg', link: '/theRxData/data-bank', classHW: 'img-big' },
      { name: 'Analytics', id: 'analytics', icon: 'assets/img/Analytic.svg', iconHover: 'assets/img/AnalyticsHover.svg', link: '/theRxData/analytics', classHW: 'img-big' },
      ];
      component.onSelectMenu(menu);
    });

  });
});
