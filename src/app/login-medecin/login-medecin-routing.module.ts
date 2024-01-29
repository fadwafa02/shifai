import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginMedecinPage } from './login-medecin.page';

const routes: Routes = [
  {
    path: '',
    component: LoginMedecinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginMedecinPageRoutingModule {}
