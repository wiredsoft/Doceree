import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DataBankComponent } from './data-bank.component';


describe('DataBankComponent', () => {
  let component: DataBankComponent;
  let fixture: ComponentFixture<DataBankComponent>;
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBankComponent ],
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
    fixture = TestBed.createComponent(DataBankComponent);
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
      event = 'API Integration';
      component.checkdedValue(event);
      event = 'Integration';
      component.checkdedValue(event);
    });

  });
});
