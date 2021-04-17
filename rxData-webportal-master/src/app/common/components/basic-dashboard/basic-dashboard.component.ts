import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-basic-dashboard',
  templateUrl: './basic-dashboard.component.html',
  styleUrls: ['./basic-dashboard.component.scss']
})
export class BasicDashboardComponent {
  @Input() mainHeading: string | undefined;
  @Input() subheading: string | undefined;
  @Input() basicSelect?: any;
  @Input() isDropDown: boolean = false;
  @Output() changeValue: EventEmitter<any> = new EventEmitter();

  checkdedValue(event: any): any {
    this.changeValue.emit(event);
  }
}
