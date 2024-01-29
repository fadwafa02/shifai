import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfficheMedecinPageRoutingModule } from './affiche-medecin-routing.module';

import { AfficheMedecinPage } from './affiche-medecin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfficheMedecinPageRoutingModule
  ],
  declarations: [AfficheMedecinPage]
})
export class AfficheMedecinPageModule {}
