import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicListViewComponent } from './basic-list-view.component';

describe('BasicListViewComponent', () => {
  let component: BasicListViewComponent;
  let fixture: ComponentFixture<BasicListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should edit', () => {
    component.edit();
    expect(component).toBeTruthy();
  });
});
