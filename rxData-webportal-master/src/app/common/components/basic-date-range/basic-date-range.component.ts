import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-basic-date-range',
  templateUrl: './basic-date-range.component.html',
  styleUrls: ['./basic-date-range.component.scss']
})
export class BasicDateRangeComponent implements OnInit {

  public daterange: any = {};
  @Input() public options: any;
  @Output() public selectedDate = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      $('#dateRangepicker').val('');
    }, 100);
  }
  public selectedDateRange(value: any, datepicker?: any): any {
    // this is the date  selected
    console.log(value);

    // any object can be passed to the selected event and it will be passed back here
    datepicker.start = value.start;
    datepicker.end = value.end;

    // use passed valuable to update state
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;

    const obj: any = {};
    obj.value = value;
    obj.datepicker = datepicker;
    this.selectedDate.emit(obj);
  }
  hideDaterangepicker(event: any): any{
    console.log(event);
  }
  hideCalendarDaterangepicker(event: any): any{
    console.log(event);
  }
  blurDateRange(event: any): any{
    console.log(event);
    this.daterange.start = '';
    this.daterange.end = '';
    this.daterange.label = '';
  }
}
