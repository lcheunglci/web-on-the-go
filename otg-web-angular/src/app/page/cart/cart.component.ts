import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems: { id: number; name: string; quantity: number; price: number }[] = [];
}
