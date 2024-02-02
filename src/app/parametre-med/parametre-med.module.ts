import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParametreMedPageRoutingModule } from './parametre-med-routing.module';

import { ParametreMedPage } from './parametre-med.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParametreMedPageRoutingModule
  ],
  declarations: [ParametreMedPage]
})
export class ParametreMedPageModule {}
