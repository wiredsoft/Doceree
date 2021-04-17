import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormComponent } from './basic-form.component';
import { FormModal } from 'src/app/modal/FormModal';

describe('BasicFormComponent', () => {
  let component: BasicFormComponent;
  let fixture: ComponentFixture<BasicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Calling Methods', () => {
    it('should onBtnClick method called ', () => {
      const Index = '1';
      component.onBtnClick(Index);
    });
    it('should onCheck method called ', () => {
      const Event = 1;
      const id = '1';
      component.onCheck(Event, id);
    });
    it('should createFormGroup method called ', () => {
      component.formfield = [
        new FormModal({
          value: '', key: 'Personal Details', label: 'Personal Details', controlType: 'label',
          required: false, type: 'text', class: 'col-sm-12', color: '#05d672'
        }),
        new FormModal({ value: '', key: 'pharmacyName', label: 'Pharmacy Name', controlType: 'input', required: false, type: 'text', class: 'col-sm-6' }),
        new FormModal({ value: '', key: 'pharmacyType', label: 'Pharmacy Type', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
        new FormModal({ value: '', key: 'pharmacistName', label: 'Pharmacist name', controlType: 'checkbox', required: false, type: 'text', class: 'col-sm-6' }),
        new FormModal({ value: '', key: 'DL No.', label: 'DL No.', controlType: 'checkbox', required: true, type: 'text', class: 'col-sm-6' }),
        new FormModal({
          value: '', key: 'Business Details', label: 'Business Details', controlType: 'label',
          required: false, type: 'text', class: 'col-sm-12', color: '#05d672'
        }),
      ]
      component.createFormGroup();
    });
  });
});
