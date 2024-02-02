import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParametreSecretairePage } from './parametre-secretaire.page';

describe('ParametreSecretairePage', () => {
  let component: ParametreSecretairePage;
  let fixture: ComponentFixture<ParametreSecretairePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ParametreSecretairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
