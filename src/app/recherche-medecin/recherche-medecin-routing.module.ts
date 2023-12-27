import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercheMedecinPage } from './recherche-medecin.page';

const routes: Routes = [
  {
    path: '',
    component: RechercheMedecinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercheMedecinPageRoutingModule {}
