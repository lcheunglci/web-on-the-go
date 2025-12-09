import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // TODO: readonly
  userCartItems = signal<Record<string, { quantity: number }>>({});

  addCartItem(id: string) {
    const cartItems: Record<string, { quantity: number }> = this.userCartItems();
    const updatedCart = {
      ...cartItems,
      [id]: {
        quantity: cartItems[id]?.quantity ? cartItems[id].quantity + 1 : 1,
      },
    };

    this.userCartItems.set(updatedCart);
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
  }
}
