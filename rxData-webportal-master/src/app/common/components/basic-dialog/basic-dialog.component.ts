import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface DialogData {
  text: string;
  buttonLabel: string;
  headingText: string;
  routeInfo?: string;
  queryParams?: any
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'basic-dialog',
  templateUrl: './basic-dialog.component.html',
  styleUrls: ['./basic-dialog.component.scss']
})
export class BasicDialogComponent implements OnInit {

  constructor(public router: Router,
    public dialogRef: MatDialogRef<BasicDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onSubmit(): void {
    if (this.data.routeInfo) {
      this.router.navigate([this.data.routeInfo], { queryParams: this.data?.queryParams });
    }
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
