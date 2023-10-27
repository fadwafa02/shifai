import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedecinPage } from './medecin.page';

describe('MedecinPage', () => {
  let component: MedecinPage;
  let fixture: ComponentFixture<MedecinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MedecinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
