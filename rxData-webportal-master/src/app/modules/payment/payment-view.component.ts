import { Component, OnInit, Optional } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BasicDialogComponent } from 'src/app/common/components/basic-dialog/basic-dialog.component';
import { FormModal } from 'src/app/modal/FormModal';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-payment-view',
  templateUrl: './payment-view.component.html',
  styleUrls: ['./payment.component.scss'],
  providers: [MatDatepickerModule]
})
export class PaymentViewComponent implements OnInit {
  public mainHeading: string | undefined;
  public subheading: string | undefined;
  public branchOption: any[] = [{ key: 'br-1', value: 'Vijay Nager' }, { key: 'br-2', value: 'Geeta Bhawan' }];

  constructor(@Optional() public dialogRef: MatDialogRef<PaymentViewComponent>,
              public dialog: MatDialog, public loginService: LoginService) {
    this.loginService.chatShow = false;
    this.loginService.headerShow = 'Payments';
  }
  public paymentObj: any = {};
  public bankDetail: FormModal[] = [];
  public billingInfo: FormModal[] = [];
  public accountDepart: FormModal[] = [];

  public bankDetailButton: any[] = [];
  public billingInfoButton: any[] = [];
  public accountDepartButton: any[] = [];

  ngOnInit(): void {
    this.initialSetup();
  }

  initialSetup(): void {
    this.mainHeading = 'Payments';
    this.subheading = 'View or edit bank details and billing information for payments to be processed';
    this.bankDetail = [
      new FormModal({
        value: '', key: 'name', label: 'Name (As per bank account)', controlType: 'input', required: true,
        type: 'text', class: 'col-sm-6'
      }),
      new FormModal({
        value: '', key: 'bankName', label: 'Bank name', controlType: 'input', required: true,
        type: 'text', class: 'col-sm-6'
      }),
      new FormModal({ value: '', key: 'accountNo', label: 'Account number', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
      new FormModal({
        value: '', key: 'ifscCode', label: 'IFSC code', controlType: 'input', required: true,
        type: 'text', class: 'col-sm-6'
      }),
      new FormModal({
        value: '', key: 'bankbranch', label: 'Bank Branch', controlType: 'select', required: true,
        class: 'col-sm-6', options: this.branchOption
      }),
      new FormModal({ value: '', key: 'typeOfAccount', label: 'Type of account', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
    ];
    this.billingInfo = [
      new FormModal({ value: '', key: 'businessCheck', label: 'Same as business profile', controlType: 'checkbox', required: true, class: 'col-sm-12' }),
      new FormModal({ value: '', key: 'firstName', label: 'First name', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
      new FormModal({
        value: '', key: 'lastName', label: 'Last name', controlType: 'input', required: true,
        type: 'text', class: 'col-sm-6'
      }),
      new FormModal({ value: '', key: 'email', label: 'Email', controlType: 'input', required: true, type: 'email', class: 'col-sm-6' }),
      new FormModal({ value: '', key: 'company', label: 'Company', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
      new FormModal({ value: '', key: 'address', label: 'Address', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
      new FormModal({
        value: '', key: 'pincode', label: 'Pincode', controlType: 'input', required: true,
        type: 'number', class: 'col-sm-3'
      }),
      new FormModal({ value: '', key: 'state', label: 'State', controlType: 'input', required: true, type: 'text', class: 'col-sm-3' }),
      new FormModal({
        value: '', key: 'country', label: 'Country', controlType: 'select', required: true,
        class: 'col-sm-6', options: this.branchOption
      }),
      new FormModal({ value: '', key: 'gst', label: 'GST', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' })
    ];
    this.accountDepart = [
      new FormModal({ value: '', key: 'businessCheck', label: 'Same as business profile', controlType: 'checkbox', required: true, class: 'col-sm-12' }),
      new FormModal({ value: '', key: 'name', label: 'Name', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
      new FormModal({ value: '', key: 'designation', label: 'Designation', controlType: 'input', required: true, type: 'text', class: 'col-sm-6' }),
      new FormModal({ value: '', key: 'contactNo', label: 'Contact number', controlType: 'input', required: true, type: 'number', class: 'col-sm-6' }),
      new FormModal({ value: '', key: 'email', label: 'Email', controlType: 'input', required: true, type: 'email', class: 'col-sm-6' }),
    ];

    this.bankDetailButton = [
      { id: 'bankDetailNext', label: 'Save' }
    ];
    this.billingInfoButton = [
      { id: 'billingInfoNext', label: 'Save' }
    ];
    this.accountDepartButton = [
      { id: 'accountDepartmentNext', label: 'Save' }
    ];
  }

  onSubmitDetail(event: any): void {
    if (this.dialogRef != null) {
      this.dialogRef.close();
    }
    else
      // if(event.valid == 'VALID'){
      if (event.id === 'accountDepartmentNext') {
        const dialogRef = this.dialog.open(BasicDialogComponent, {
          data: {
            text: 'Upload all your invoices for the previous month between 1st – 7th of next month. Any invoice uploaded after 7th will be processed next month. Payments take 60 days to process.',
            buttonLabel: 'Done',
            width: '800px'
          }
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      }
    // }
  }

}
