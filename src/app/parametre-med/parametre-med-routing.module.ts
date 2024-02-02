import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParametreMedPage } from './parametre-med.page';

const routes: Routes = [
  {
    path: '',
    component: ParametreMedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParametreMedPageRoutingModule {}
