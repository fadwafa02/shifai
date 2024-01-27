import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeAvantComptePage } from './home-avant-compte.page';

const routes: Routes = [
  {
    path: '',
    component: HomeAvantComptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeAvantComptePageRoutingModule {}
