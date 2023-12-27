import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjoutMedecinPage } from './ajout-medecin.page';

describe('AjoutMedecinPage', () => {
  let component: AjoutMedecinPage;
  let fixture: ComponentFixture<AjoutMedecinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjoutMedecinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
