import { Component, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MedicamentFormComponent } from './medicament-form/medicament-form.component';

@Component({
  selector: 'app-medicament',
  templateUrl: 'medicament.page.html',
  styleUrls: ['medicament.page.scss']
})
export class MedicamentPage {

  @ViewChild('myModal') myModal: any;
  medicamentFormComponent = MedicamentFormComponent;

  constructor(private modalController: ModalController) {}

  openMedicamentFormModal() {
    this.modalController.create({
      component: this.medicamentFormComponent,
    }).then(modal => {
      modal.present();
    });
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}

