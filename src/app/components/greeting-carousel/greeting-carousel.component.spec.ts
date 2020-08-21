import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingCarouselComponent } from './greeting-carousel.component';

describe('GreetingCarouselComponent', () => {
  let component: GreetingCarouselComponent;
  let fixture: ComponentFixture<GreetingCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
