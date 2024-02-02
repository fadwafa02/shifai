import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalenderMedecinPageRoutingModule } from './calender-medecin-routing.module';

import { CalenderMedecinPage } from './calender-medecin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalenderMedecinPageRoutingModule
  ],
  declarations: [CalenderMedecinPage]
})
export class CalenderMedecinPageModule {}
