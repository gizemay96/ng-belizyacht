import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersCardComponent } from './numbers-card.component';

describe('NumbersCardComponent', () => {
  let component: NumbersCardComponent;
  let fixture: ComponentFixture<NumbersCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbersCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
