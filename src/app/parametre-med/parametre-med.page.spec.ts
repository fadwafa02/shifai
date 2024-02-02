import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParametreMedPage } from './parametre-med.page';

describe('ParametreMedPage', () => {
  let component: ParametreMedPage;
  let fixture: ComponentFixture<ParametreMedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ParametreMedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
