import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeindividuPage } from './homeindividu.page';

const routes: Routes = [
  {
    path: '',
    component: HomeindividuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeindividuPageRoutingModule {}
