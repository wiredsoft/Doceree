import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingOrKnowComponent } from './pending-or-know.component';

describe('PendingOrKnowComponent', () => {
  let component: PendingOrKnowComponent;
  let fixture: ComponentFixture<PendingOrKnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingOrKnowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingOrKnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
