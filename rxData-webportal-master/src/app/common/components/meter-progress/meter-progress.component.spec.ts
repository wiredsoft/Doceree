import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterProgressComponent } from './meter-progress.component';

describe('MeterProgressComponent', () => {
  let component: MeterProgressComponent;
  let fixture: ComponentFixture<MeterProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeterProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterProgressComponent);
    component = fixture.componentInstance;
    component.data = {
      upDown: 'up'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    component.chartOptions.plotOptions.radialBar.dataLabels.value.formatter(12);
    component.color = 'grey';
    component.data.upDown = 'green';
    component.ngOnInit();
  });
});
