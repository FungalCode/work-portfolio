import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCarousel } from './logo-carousel';

describe('LogoCarousel', () => {
  let component: LogoCarousel;
  let fixture: ComponentFixture<LogoCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
