import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './login.page';
import { TabsPage } from '../tabs/tabs.page';
import { ForgotpassPage } from '../forgotpass/forgotpass.page';


const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'forgotpass',
    component: ForgotpassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
