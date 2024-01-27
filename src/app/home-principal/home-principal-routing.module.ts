import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePrincipalPage } from './home-principal.page';

const routes: Routes = [
  {
    path: '',
    component: HomePrincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePrincipalPageRoutingModule {}
