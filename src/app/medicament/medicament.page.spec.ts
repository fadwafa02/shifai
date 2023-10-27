import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicamentPage } from './medicament.page';

describe('MedicamentPage', () => {
  let component: MedicamentPage;
  let fixture: ComponentFixture<MedicamentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MedicamentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
