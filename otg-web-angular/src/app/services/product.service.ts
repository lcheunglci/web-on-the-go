import { httpResource } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly route = inject(ActivatedRoute);
  readonly selectedProductId = toSignal(
    this.route.queryParams.pipe(map((params) => params['productId']))
  );

  readonly products = httpResource<Product[]>(() => '/api/products');

  readonly selectedProduct = httpResource<Product | undefined>(
    () => `/api/products/${this.selectedProductId()}`
  );
}
