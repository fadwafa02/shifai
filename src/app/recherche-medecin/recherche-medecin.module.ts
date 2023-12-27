import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheMedecinPageRoutingModule } from './recherche-medecin-routing.module';

import { RechercheMedecinPage } from './recherche-medecin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheMedecinPageRoutingModule
  ],
  declarations: [RechercheMedecinPage]
})
export class RechercheMedecinPageModule {}
