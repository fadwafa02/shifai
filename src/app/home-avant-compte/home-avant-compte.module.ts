import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeAvantComptePageRoutingModule } from './home-avant-compte-routing.module';

import { HomeAvantComptePage } from './home-avant-compte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeAvantComptePageRoutingModule
  ],
  declarations: [HomeAvantComptePage]
})
export class HomeAvantComptePageModule {}
