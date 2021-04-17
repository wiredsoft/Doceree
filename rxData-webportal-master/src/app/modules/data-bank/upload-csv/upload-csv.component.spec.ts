import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadCsvComponent } from './upload-csv.component';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule, MatDialog } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepper } from '@angular/material/stepper';


describe('UploadCsvComponent', () => {
  let component: UploadCsvComponent;
  let fixture: ComponentFixture<UploadCsvComponent>;
  let router: Router;
  let loginService: LoginService;
  let dialog: MatDialog;
  let matStepper: MatStepper;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCsvComponent ],
      imports: [
        BrowserAnimationsModule,
        MatDialogModule,
        RouterTestingModule.withRoutes([
          { path: '', component: UploadCsvComponent },
        ]),
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        MatStepper
      ]
    })
    .compileComponents();
    router = TestBed.get(Router); // Just if we need to test Route Service functionality
    router.initialNavigation();
    loginService = TestBed.get(LoginService);
    dialog = TestBed.get(MatDialog);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCsvComponent);
    component = fixture.componentInstance;
    component.dialog = dialog;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Calling Methods', () => {
    it('should removeFile method called ', () => {
      component.removeFile();
      expect(component.file)
      .toBe(undefined);
    });
    it('should startTimer method called ', () => {
      component.startTimer();
    });
    it('should onSubmit method called ', () => {
      component.onSubmit();
    });
    it('should openDialogPaymentView method called ', () => {
      component.openDialogPaymentView();
    });
    it('should openDialogAccountView method called ', () => {
      component.openDialogAccountView();
    });
    it('should onEdit method called ', () => {
      component.onEdit(matStepper);
    });
  });
});
