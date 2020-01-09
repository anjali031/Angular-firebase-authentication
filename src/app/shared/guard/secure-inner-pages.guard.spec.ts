import { TestBed, async, inject } from '@angular/core/testing';

import { SecureInnerPagesGuard } from './secure-inner-pages.guard';

describe('SecureInnerPagesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecureInnerPagesGuard]
    });
  });

  it('should ...', inject([SecureInnerPagesGuard], (guard: SecureInnerPagesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
