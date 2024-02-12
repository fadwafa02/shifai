import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CalenderMedecinPage } from './calender-medecin.page';

describe('CalenderMedecinPage', () => {
  let component: CalenderMedecinPage;
  let fixture: ComponentFixture<CalenderMedecinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalenderMedecinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
