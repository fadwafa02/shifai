import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupMedecinPage } from './signup-medecin.page';

describe('SignupMedecinPage', () => {
  let component: SignupMedecinPage;
  let fixture: ComponentFixture<SignupMedecinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SignupMedecinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
