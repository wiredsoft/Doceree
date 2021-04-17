import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-count-grid',
  templateUrl: './basic-count-grid.component.html',
  styleUrls: ['./basic-count-grid.component.scss']
})
export class BasicCountGridComponent {
@Input() grid: any;
@Input() isDashboard: any;
@Input() multipleData: any;
}
