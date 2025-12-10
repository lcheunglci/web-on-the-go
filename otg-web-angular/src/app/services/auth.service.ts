import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly userId = signal<string | undefined>(undefined);

  isAuthorized(requiredPermission: any) {
    // TODO: add permission
    return true;
  }

  login(userId: string) {
    // check if the user is valid
    this.userId.set(userId.toLowerCase());
  }

  logout() {
    this.userId.set(undefined);
  }
}
