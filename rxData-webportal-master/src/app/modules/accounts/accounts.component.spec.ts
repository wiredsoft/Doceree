import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from 'src/app/service/login.service';
import { AccountsComponent } from './accounts.component';

describe('AccountsComponent', () => {
  let component: AccountsComponent;
  let fixture: ComponentFixture<AccountsComponent>;
  let router: Router;
  let loginService: LoginService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsComponent ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: AccountsComponent },
        ]),
      ],
    })
    .compileComponents();
    router = TestBed.get(Router); // Just if we need to test Route Service functionality
    router.initialNavigation();
    loginService = TestBed.get(LoginService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Calling Methods', () => {
    it('should selectedDateRange method called ', () => {
      const event = 'demo';
      component.selectedDateRange(event);
    });
    it('should checkdedValue method called ', () => {
      let event = 'Upload CSV';
      component.checkdedValue(event);
      event = 'Manual Add';
      component.checkdedValue(event);
      event = 'Add';
      component.checkdedValue(event);
    });

  });
});
