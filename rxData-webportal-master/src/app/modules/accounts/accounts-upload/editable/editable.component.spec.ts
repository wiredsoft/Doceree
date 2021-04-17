import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableComponent } from './editable.component';

describe('EditableComponent', () => {
  let component: EditableComponent;
  let fixture: ComponentFixture<EditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    const event = 'demo';
    const key = 'demo';
    component.onCheck(event,key);
    expect(component).toBeTruthy();
  });
});
