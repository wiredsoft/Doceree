import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GaugeChartModule } from 'angular-gauge-chart';
import { Daterangepicker } from 'ng2-daterangepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicButtonComponent } from './common/components/basic-button/basic-button.component';
import { BasicCountGridComponent } from './common/components/basic-count-grid/basic-count-grid.component';
import { BasicDashboardComponent } from './common/components/basic-dashboard/basic-dashboard.component';
import { BasicDateRangeComponent } from './common/components/basic-date-range/basic-date-range.component';
import { BasicDialogComponent } from './common/components/basic-dialog/basic-dialog.component';
import { BasicFormComponent } from './common/components/basic-form/basic-form.component';
import { BasicListViewComponent } from './common/components/basic-list-view/basic-list-view.component';
import { BasicSelectComponent } from './common/components/basic-select/basic-select.component';
import { BasicTableComponent } from './common/components/basic-table/basic-table.component';
import { MeterProgressComponent } from './common/components/meter-progress/meter-progress.component';
import { PendingOrKnowComponent } from './common/components/pending-or-know/pending-or-know.component';
import { ChartsComponent } from './modules/dashboard/charts/charts.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { RadarChartComponent } from './modules/dashboard/radar-chart/radar-chart.component';
import { HeaderComponent } from './modules/layout/header/header.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { SidebarComponent } from './modules/layout/sidebar/sidebar.component';
import { LoginComponent } from './modules/login/login.component';
import { PaymentSetupComponent } from './modules/payment/payment-setup/payment-setup.component';
import { PaymentViewComponent } from './modules/payment/payment-view.component';
import { PaymentComponent } from './modules/payment/payment.component';
import { ProfileAddComponent } from './modules/profile/profile-add/profile-add.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { SignupComponent } from './modules/login/signup/signup.component';
import { BasicCoverCardComponent } from './common/components/basic-cover-card/basic-cover-card.component';
import { AccountsComponent } from './modules/accounts/accounts.component';
import { AccountsAddComponent } from './modules/accounts/accounts-add/accounts-add.component';
import { AccountsUploadComponent } from './modules/accounts/accounts-upload/accounts-upload.component';
import { AnalyticsComponent } from './modules/analytics/analytics.component';
import { AccountInsightsComponent } from './modules/analytics/account-insights/account-insights.component';
import { DragDirective } from './common/directive/dragDrop.directive';
import { EditableComponent } from './modules/accounts/accounts-upload/editable/editable.component';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DataBankComponent } from './modules/data-bank/data-bank.component';
import { UploadCsvComponent } from './modules/data-bank/upload-csv/upload-csv.component';
import { UploadApiComponent } from './modules/data-bank/upload-api/upload-api.component';
import { MeterCardComponent } from './common/components/meter-card/meter-card.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PaymentComponent,
    PaymentViewComponent,
    BasicDashboardComponent,
    BasicCountGridComponent,
    BasicTableComponent,
    BasicFormComponent,
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    ChartsComponent,
    BasicFormComponent,
    BasicButtonComponent,
    MeterProgressComponent,
    RadarChartComponent,
    PaymentSetupComponent,
    BasicListViewComponent,
    BasicDialogComponent,
    PendingOrKnowComponent,
    ProfileComponent,
    ProfileAddComponent,
    SignupComponent,
    BasicCoverCardComponent,
    BasicDateRangeComponent,
    BasicSelectComponent,
    SignupComponent,
    AccountsComponent,
    AccountsAddComponent,
    AccountsUploadComponent,
    AnalyticsComponent,
    AccountInsightsComponent,
    DragDirective,
    EditableComponent,
    DataBankComponent,
    UploadCsvComponent,
    UploadApiComponent,
    MeterCardComponent
  ],
  exports: [
    BasicDashboardComponent,
    BasicCountGridComponent,
    BasicTableComponent,
    BasicButtonComponent,
    HeaderComponent,
    SidebarComponent,
    BasicDateRangeComponent,
    BasicSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatIconModule,
    MatTabsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    LayoutModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    GaugeChartModule,
    MatStepperModule,
    Daterangepicker,
    MatProgressBarModule,
    FormsModule,
    NgApexchartsModule,
    NgxPaginationModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
