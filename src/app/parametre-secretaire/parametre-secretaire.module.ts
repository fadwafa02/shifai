import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParametreSecretairePageRoutingModule } from './parametre-secretaire-routing.module';

import { ParametreSecretairePage } from './parametre-secretaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParametreSecretairePageRoutingModule
  ],
  declarations: [ParametreSecretairePage]
})
export class ParametreSecretairePageModule {}
