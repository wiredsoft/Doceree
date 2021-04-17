import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCountGridComponent } from './basic-count-grid.component';

describe('BasicCountGridComponent', () => {
  let component: BasicCountGridComponent;
  let fixture: ComponentFixture<BasicCountGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicCountGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCountGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
