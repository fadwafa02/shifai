import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedecinPageRoutingModule } from './medecin-routing.module';

import { MedecinPage } from './medecin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedecinPageRoutingModule
  ],
  declarations: [MedecinPage]
})
export class MedecinPageModule {}
