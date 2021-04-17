import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { AnalyticsComponent } from './analytics.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AnalyticsComponent', () => {
  let component: AnalyticsComponent;
  let fixture: ComponentFixture<AnalyticsComponent>;
  let router: Router;
  let loginService: LoginService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticsComponent ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: AnalyticsComponent },
        ]),
      ],
    })
    .compileComponents();
    router = TestBed.get(Router); // Just if we need to test Route Service functionality
    router.initialNavigation();
    loginService = TestBed.get(LoginService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Calling Methods', () => {
    it('should pageChange method called ', () => {
      const event = {
        pageIndex: 1
      };
      component.pageChange(event);
      expect(component.page)
      .toEqual(event);
    });
    it('should selectedDateRange method called ', () => {
      const event = '12/12/2020';
      component.selectedDateRange(event);
    });
    it('should downloadFile method called ', () => {
      component.downloadFile();
    });
    it('should checkdedValue method called ', () => {
      let event = 'Geed Pharmacy';
      component.checkdedValue(event);
      event = 'Pharmacy';
      component.checkdedValue(event);
    });
  });
});
