import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedecinUidService {
  private medecinUidSubject = new Subject<string>();

  // Observable pour observer les changements dans l'UID du médecin
  medecinUidObservable = this.medecinUidSubject.asObservable();

  // Fonction pour mettre à jour l'UID du médecin
  setMedecinUid(uid: string) {
    this.medecinUidSubject.next(uid);
  }
}