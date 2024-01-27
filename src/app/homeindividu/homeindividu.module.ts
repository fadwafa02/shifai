import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeindividuPageRoutingModule } from './homeindividu-routing.module';

import { HomeindividuPage } from './homeindividu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeindividuPageRoutingModule
  ],
  declarations: [HomeindividuPage]
})
export class HomeindividuPageModule {}
