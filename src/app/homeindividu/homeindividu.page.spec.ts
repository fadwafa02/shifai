import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeindividuPage } from './homeindividu.page';

describe('HomeindividuPage', () => {
  let component: HomeindividuPage;
  let fixture: ComponentFixture<HomeindividuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeindividuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
