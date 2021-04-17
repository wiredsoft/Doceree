import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.scss']
})
export class EditableComponent {

  @Input() tableObj: any;

  onCheck(event: any, key: string): void{
  }

}
