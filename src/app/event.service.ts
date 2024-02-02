// event.service.ts
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  // Déclarez un EventEmitter pour l'événement
  medicamentUpdated = new EventEmitter<void>();
  secretaireUpdated: any;
  private secretaireUpdatedSubject = new Subject<void>();

   // Déclarez votre observable pour que les autres composants puissent s'abonner
   secretaireUpdated$: Subject<any> = new Subject<any>();


     // Méthode pour déclencher la mise à jour du secrétaire
  triggerSecretaireUpdate() {
    this.secretaireUpdatedSubject.next();
  }

  // Méthode pour déclencher l'événement
  triggerMedicamentUpdated() {
    this.medicamentUpdated.emit();
  }
}
