import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutMedecinPage } from './ajout-medecin.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutMedecinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutMedecinPageRoutingModule {}
