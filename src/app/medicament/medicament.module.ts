import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MedicamentPageRoutingModule } from './medicament-routing.module';
import { MedicamentPage } from './medicament.page';
import { MedicamentFormComponent } from './medicament-form/medicament-form.component'; // Assurez-vous de spécifier le bon chemin

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicamentPageRoutingModule,

  ],
  declarations: [MedicamentPage],
})
export class MedicamentPageModule {}
