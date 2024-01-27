import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePrincipalPage } from './home-principal.page';

describe('HomePrincipalPage', () => {
  let component: HomePrincipalPage;
  let fixture: ComponentFixture<HomePrincipalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomePrincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
