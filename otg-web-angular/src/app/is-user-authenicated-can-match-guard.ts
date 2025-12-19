import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthService } from './services/auth.service';

export const isUserAuthenicatedCanMatchGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  return !!authService.authenticatedUser.value();
};
