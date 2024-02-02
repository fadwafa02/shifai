import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMedecinPage } from './app-medecin.page';

describe('AppMedecinPage', () => {
  let component: AppMedecinPage;
  let fixture: ComponentFixture<AppMedecinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppMedecinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
