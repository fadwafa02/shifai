import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutMedecinPageRoutingModule } from './ajout-medecin-routing.module';

import { AjoutMedecinPage } from './ajout-medecin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutMedecinPageRoutingModule
  ],
  declarations: [AjoutMedecinPage]
})
export class AjoutMedecinPageModule {}
