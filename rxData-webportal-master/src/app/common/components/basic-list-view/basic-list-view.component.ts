import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'basic-list-view',
  templateUrl: './basic-list-view.component.html',
  styleUrls: ['./basic-list-view.component.scss']
})
export class BasicListViewComponent {

  @Input() title = '';
  @Input() object?: any;
  @Input() fields: any[] = [];
  @Input() isEdit = false;

  @Output() whenEdit: EventEmitter<any> = new EventEmitter<any>();
  @Output() onEdit: EventEmitter<any> = new EventEmitter<any>();

  edit(): void {
    this.onEdit.emit();
  }

}
