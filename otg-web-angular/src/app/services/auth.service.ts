import { httpResource } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly userId = signal<string | undefined>(undefined);

  authenticatedUser = httpResource<User>(() => `/api/users/${this.userId()}`);

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
