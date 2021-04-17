import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-basic-select',
  templateUrl: './basic-select.component.html',
  styleUrls: ['./basic-select.component.scss']
})
export class BasicSelectComponent implements OnInit {
  @Output() public checkdedValue = new EventEmitter();
  @Input() basicSelect: any;
  public heading = 'Sort By';
  constructor() { }

  ngOnInit(): void {
  }
  checked(value: string): void {
    this.basicSelect.placeHolder = value;
    this.checkdedValue.emit(value);
  }

}
