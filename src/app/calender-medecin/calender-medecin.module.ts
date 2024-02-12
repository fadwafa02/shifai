import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { CalenderMedecinPageRoutingModule } from './calender-medecin-routing.module';

import { CalenderMedecinPage } from './calender-medecin.page';


import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,

    IonicModule,
    CalenderMedecinPageRoutingModule,
    NgbModalModule,
   
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  declarations: [CalenderMedecinPage]
})
export class CalenderMedecinPageModule {}
