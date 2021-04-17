import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDateRangeComponent } from './basic-date-range.component';

describe('BasicDateRangeComponent', () => {
  let component: BasicDateRangeComponent;
  let fixture: ComponentFixture<BasicDateRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicDateRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Calling Methods', () => {
    it('should selectedDateRange method called ', () => {
      const value = 1;
      const datePicker = {
        start: 'demo-start',
        end: 'demo-end',
        label: 'demo-label',
      };
      component.selectedDateRange(value, datePicker);
      expect(component.daterange.start)
      .toEqual(datePicker.start);
    });
    it('should hideDaterangepicker method called ', () => {
      const event = 1;
      component.hideDaterangepicker(event);
    });
    it('should hideCalendarDaterangepicker method called ', () => {
      const event = 1;
      component.hideCalendarDaterangepicker(event);
    });
    it('should blurDateRange method called ', () => {
      const event = 1;
      component.blurDateRange(event);
      expect(component.daterange.start)
      .toEqual('');
    });
  });
});
