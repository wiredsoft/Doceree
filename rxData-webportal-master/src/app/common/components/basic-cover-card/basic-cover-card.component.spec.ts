import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCoverCardComponent } from './basic-cover-card.component';

describe('BasicCoverCardComponent', () => {
  let component: BasicCoverCardComponent;
  let fixture: ComponentFixture<BasicCoverCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicCoverCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCoverCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
