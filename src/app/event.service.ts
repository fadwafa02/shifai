// event.service.ts
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  // Déclarez un EventEmitter pour l'événement
  medicamentUpdated = new EventEmitter<void>();

  // Méthode pour déclencher l'événement
  triggerMedicamentUpdated() {
    this.medicamentUpdated.emit();
  }
}
