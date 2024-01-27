import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomemedecinPage } from './homemedecin.page';

const routes: Routes = [
  {
    path: '',
    component: HomemedecinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomemedecinPageRoutingModule {}
