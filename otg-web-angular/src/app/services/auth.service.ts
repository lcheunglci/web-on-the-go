import { httpResource } from '@angular/common/http';
import { computed, Injectable, linkedSignal, signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly userId = signal<string | undefined>(undefined);
  readonly loginError = signal<boolean>(false);

  allUsers = httpResource<User[]>(() => '/api/users');

  authenticatedUser = httpResource<User>(() => `/api/users/${this.userId()}`);

  userPermission = computed(() => {
    return this.userId() ? this.authenticatedUser.value()?.permissions || [] : [];
  });

  validUserIds = linkedSignal(() => {
    return this.allUsers.hasValue() ? this.allUsers.value().map((user) => user.id) : [];
  });

  isAuthorized(requiredPermission: any) {
    return !!this.authenticatedUser.value()?.permissions.includes(requiredPermission);
  }

  login(userId: string) {
    // check if the user is valid
    if (this.validUserIds().includes(userId.toLowerCase())) {
      this.userId.set(userId.toLowerCase());
      this.loginError.set(false);
    } else {
      this.loginError.set(true);
    }
  }

  logout() {
    this.userId.set(undefined);
    this.loginError.set(false);
  }

  updateUserCart(cart: Record<string, { quantity: number }>): void {
    if (this.userId()) {
      const user = this.authenticatedUser.value();
      if (user) {
        user.cart = cart;
        this.authenticatedUser.set(user);
      }
    }
  }
}
