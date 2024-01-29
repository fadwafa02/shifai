import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupMedecinPageRoutingModule } from './signup-medecin-routing.module';

import { SignupMedecinPage } from './signup-medecin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupMedecinPageRoutingModule
  ],
  declarations: [SignupMedecinPage]
})
export class SignupMedecinPageModule {}
