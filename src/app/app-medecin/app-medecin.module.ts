import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppMedecinPageRoutingModule } from './app-medecin-routing.module';

import { AppMedecinPage } from './app-medecin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppMedecinPageRoutingModule
  ],
  declarations: [AppMedecinPage]
})
export class AppMedecinPageModule {}
