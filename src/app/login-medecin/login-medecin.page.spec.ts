import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginMedecinPage } from './login-medecin.page';

describe('LoginMedecinPage', () => {
  let component: LoginMedecinPage;
  let fixture: ComponentFixture<LoginMedecinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginMedecinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
