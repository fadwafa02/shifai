import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RechercheMedecinPage } from './recherche-medecin.page';

describe('RechercheMedecinPage', () => {
  let component: RechercheMedecinPage;
  let fixture: ComponentFixture<RechercheMedecinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RechercheMedecinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
