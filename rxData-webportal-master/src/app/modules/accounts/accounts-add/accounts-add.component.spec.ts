import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsAddComponent } from './accounts-add.component';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('AccountsAddComponent', () => {
  let component: AccountsAddComponent;
  let fixture: ComponentFixture<AccountsAddComponent>;
  // let router: Router;
  // let loginService: LoginService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsAddComponent ],
      imports: [
        // RouterTestingModule.withRoutes([
        //   { path: '', component: AccountsAddComponent },
        // ]),
        MatDialogModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
    // router = TestBed.get(Router); // Just if we need to test Route Service functionality
    // router.initialNavigation();
    // loginService = TestBed.get(LoginService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
