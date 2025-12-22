import { Injectable, signal } from '@angular/core';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orders = signal<Order[]>([]);
}
