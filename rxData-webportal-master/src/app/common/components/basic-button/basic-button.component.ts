import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'basic-button',
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.scss']
})
export class BasicButtonComponent implements OnInit {

  @Input() text?: string;
  @Input() icon = '';

  constructor() { }

  ngOnInit(): void {
    console.log('====================================');
    console.log(this.text);
    console.log('====================================');
  }

}
