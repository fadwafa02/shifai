import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeAvantComptePage } from './home-avant-compte.page';

describe('HomeAvantComptePage', () => {
  let component: HomeAvantComptePage;
  let fixture: ComponentFixture<HomeAvantComptePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeAvantComptePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
