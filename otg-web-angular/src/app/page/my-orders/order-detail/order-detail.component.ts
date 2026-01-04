import { Component, input } from '@angular/core';
import { Order } from '../../../models/order.model';

@Component({
  selector: 'app-order-detail',
  imports: [],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.scss',
})
export class OrderDetailComponent {
  protected order = input<Order | undefined>(undefined);
}
