import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pending-or-know',
  templateUrl: './pending-or-know.component.html',
  styleUrls: ['./pending-or-know.component.scss']
})
export class PendingOrKnowComponent {
  public pendingList = [{ count: '7,863,87', title: 'Total no of subscriber' }, { count: '77,863', title: 'No of subscriber consumed the data ' }, { count: '21 / 97', title: 'Frequency of data upload Vs Others' }];
  @Input() pendingObj: any;
}
