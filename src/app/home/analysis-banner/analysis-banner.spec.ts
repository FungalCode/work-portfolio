import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisBanner } from './analysis-banner';

describe('AnalysisBanner', () => {
  let component: AnalysisBanner;
  let fixture: ComponentFixture<AnalysisBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
