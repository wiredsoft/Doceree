import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Calling Methods', () => {
    it('should selectedDateRange method called ', () => {
      const Index = 1;
      component.selectedDateRange(Index);
    });
    it('should pageChange method called ', () => {
      const Index = 1;
      component.pageChange(Index);
    });
    it('should downloadFile method called ', () => {
      component.downloadFile();
    });
    it('should downloadFile method called ', () => {
      var dashboard = document.createElement('div');
      document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dashboard);
      component.ngOnInit();
    });
    const id = document.getElementById('dashboard');
  });
});
