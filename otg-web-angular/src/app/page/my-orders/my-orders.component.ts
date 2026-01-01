import { Component, inject } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-my-orders',
  imports: [],
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.scss',
})
export class MyOrdersComponent {
  protected readonly orderService = inject(OrderService);
}
