import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParametreSecretairePage } from './parametre-secretaire.page';

const routes: Routes = [
  {
    path: '',
    component: ParametreSecretairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParametreSecretairePageRoutingModule {}
