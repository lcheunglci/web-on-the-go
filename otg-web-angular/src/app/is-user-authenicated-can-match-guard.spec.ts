import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { isUserAuthenicatedCanMatchGuard } from './is-user-authenicated-can-match-guard';

describe('isUserAuthenicatedCanMatchGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isUserAuthenicatedCanMatchGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
