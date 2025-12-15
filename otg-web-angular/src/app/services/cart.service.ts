import { inject, Injectable, linkedSignal, signal } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  readonly authService = inject(AuthService);

  readonly userCartItems = linkedSignal(() => {
    if (this.authService.userId()) {
      return this.authService.authenticatedUser.value()?.cart ?? {};
    }
    return {};
  });

  addCartItem(id: string) {
    const cartItems: Record<string, { quantity: number }> = this.userCartItems();
    const updatedCart = {
      ...cartItems,
      [id]: {
        quantity: cartItems[id]?.quantity ? cartItems[id].quantity + 1 : 1,
      },
    };

    this.userCartItems.set(updatedCart);

    this.authService.updateUserCart({
      ...cartItems,
      [id]: { quantity: cartItems[id]?.quantity ? cartItems[id].quantity + 1 : 1 },
    });
  }

  decrementCartItem(id: string) {
    const cartItems: Record<string, { quantity: number }> = this.userCartItems();

    const updatedQuantity = (cartItems[id].quantity || 0) - 1;

    if (updatedQuantity) {
      cartItems[id].quantity = updatedQuantity;
    } else {
      delete cartItems[id];
    }

    this.userCartItems.set({ ...cartItems });
    this.authService.updateUserCart({ ...cartItems });
  }
}
