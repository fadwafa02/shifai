import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfficheMedecinPage } from './affiche-medecin.page';

const routes: Routes = [
  {
    path: '',
    component: AfficheMedecinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfficheMedecinPageRoutingModule {}
