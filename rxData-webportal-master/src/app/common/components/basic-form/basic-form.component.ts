import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormModal } from 'src/app/modal/FormModal';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  @Input() formfield: FormModal[] = [];
  @Input() form: FormGroup = new FormGroup({});
  @Input() buttons: any[] = [];

  @Output() btnClickEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
    this.form = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    const group: any = {};
    this.formfield.forEach(element => {
      if (element.controlType === 'checkbox'){
        group[element.key] = element.required ? new FormControl(element.value, Validators.required)
          : new FormControl(element.value);
      } else if (element.controlType !== 'label') {
        group[element.key] = element.required ? new FormControl(element.value || '', Validators.required)
          : new FormControl(element.value || '');
      }
    });
    return new FormGroup(group);
  }

  onBtnClick(Id: string): void{
    const data = {
      id: Id,
      valid: this.form.status,
      value: this.form.value
    };
    this.btnClickEvent.next(data);
  }

  onCheck(event: any, id: string): void{
    this.form.controls[id].setValue(event.target.checked);
  }

}
