import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomemedecinPageRoutingModule } from './homemedecin-routing.module';

import { HomemedecinPage } from './homemedecin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomemedecinPageRoutingModule
  ],
  declarations: [HomemedecinPage]
})
export class HomemedecinPageModule {}
