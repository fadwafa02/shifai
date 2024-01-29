import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginMedecinPageRoutingModule } from './login-medecin-routing.module';

import { LoginMedecinPage } from './login-medecin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginMedecinPageRoutingModule
  ],
  declarations: [LoginMedecinPage]
})
export class LoginMedecinPageModule {}
