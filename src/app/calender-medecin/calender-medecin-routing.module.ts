import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalenderMedecinPage } from './calender-medecin.page';

const routes: Routes = [
  {
    path: '',
    component: CalenderMedecinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalenderMedecinPageRoutingModule {}
