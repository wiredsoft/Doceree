import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInsightsComponent } from './account-insights.component';

describe('AccountInsightsComponent', () => {
  let component: AccountInsightsComponent;
  let fixture: ComponentFixture<AccountInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountInsightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Calling Methods', () => {
    it('should selectedDateRange method called ', () => {
      const Event = 'demo';
      component.selectedDateRange(Event);
    });
    it('should downloadFile method called ', () => {
      component.downloadFile();
    });
    it('should checkdedValue method called ', () => {
      const Event = 'demo';
      component.chartOptions.plotOptions.radialBar.dataLabels.value.formatter(12);
      component.checkdedValue(Event);
    });
  });
});
