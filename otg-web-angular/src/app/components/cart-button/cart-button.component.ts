import { CartService } from './../../services/cart.service';
import { Component, inject, input } from '@angular/core';

@Component({
  selector: 'app-cart-button',
  imports: [],
  templateUrl: './cart-button.component.html',
  styleUrl: './cart-button.component.scss',
})
export class CartButtonComponent {
  item = input.required<Product>();

  protected readonly cartService = inject(CartService);
}
