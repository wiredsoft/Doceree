import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterCardComponent } from './meter-card.component';

describe('MeterCardComponent', () => {
  let component: MeterCardComponent;
  let fixture: ComponentFixture<MeterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeterCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    component.cardDetail.nameShow = 'demo';
    component.cardDetail.sign = '%';
    component.chartOptions.plotOptions.radialBar.dataLabels.value.formatter(12);
    component.cardDetail.sign = undefined;
    component.chartOptions.plotOptions.radialBar.dataLabels.value.formatter(12);
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
