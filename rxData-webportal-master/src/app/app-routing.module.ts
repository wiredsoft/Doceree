import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PaymentComponent } from './modules/payment/payment.component';
import { PaymentViewComponent } from './modules/payment/payment-view.component';
import { PaymentSetupComponent } from './modules/payment/payment-setup/payment-setup.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { ProfileAddComponent } from './modules/profile/profile-add/profile-add.component';
import { SignupComponent } from './modules/login/signup/signup.component';
import { AccountsComponent } from './modules/accounts/accounts.component';
import { AccountsAddComponent } from './modules/accounts/accounts-add/accounts-add.component';
import { AccountsUploadComponent } from './modules/accounts/accounts-upload/accounts-upload.component';
import { AnalyticsComponent } from './modules/analytics/analytics.component';
import { AccountInsightsComponent } from './modules/analytics/account-insights/account-insights.component';
import { DataBankComponent } from './modules/data-bank/data-bank.component';
import { UploadApiComponent } from './modules/data-bank/upload-api/upload-api.component';
import { UploadCsvComponent } from './modules/data-bank/upload-csv/upload-csv.component';


const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  {
    path: 'theRxData',
    component: LayoutComponent,
    // canActivate: [AuthGuard],

    children: [
      // { path: 'merchandising', loadChildren: './merchandising/merchandising.module#MerchandisingModule' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'payment-view', component: PaymentViewComponent },
      { path: 'payment-setup', component: PaymentSetupComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'profile-add', component: ProfileAddComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'accounts/add', component: AccountsAddComponent },
      { path: 'accounts/upload', component: AccountsUploadComponent },
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'analytics/insights', component: AccountInsightsComponent },
      { path: 'data-bank', component: DataBankComponent },
      { path: 'data-bank/csv', component: UploadCsvComponent },
      { path: 'data-bank/api', component: UploadApiComponent }
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'signup' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
