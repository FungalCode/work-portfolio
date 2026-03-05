import { TestBed } from '@angular/core/testing';

import { ConversionEvents } from './conversion-events';

describe('ConversionEvents', () => {
  let service: ConversionEvents;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversionEvents);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
