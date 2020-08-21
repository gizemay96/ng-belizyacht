import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourTypesPageComponent } from './tour-types-page.component';

describe('TourTypesPageComponent', () => {
  let component: TourTypesPageComponent;
  let fixture: ComponentFixture<TourTypesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourTypesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourTypesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
