import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppMedecinPage } from './app-medecin.page';

const routes: Routes = [
  {
    path: '',
    component: AppMedecinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppMedecinPageRoutingModule {}
