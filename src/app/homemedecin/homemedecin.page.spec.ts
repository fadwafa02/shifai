import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomemedecinPage } from './homemedecin.page';

describe('HomemedecinPage', () => {
  let component: HomemedecinPage;
  let fixture: ComponentFixture<HomemedecinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomemedecinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
