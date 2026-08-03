import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import type { OrderView, Product } from '../models/order.types';

export interface CloseOrderRequest {
  number: string;
}

export interface PrepareProductRequest {
  orderNumber: string;
  entryId: string;
}

@Injectable({
  providedIn: 'root',
  standalone: false
})
export class OrderService {
  private readonly http = inject(HttpClient);
  private readonly httpUrl = '/bar';

  getOpenOrders(): Observable<OrderView[]> {
    return this.http.get<OrderView[]>(`${this.httpUrl}/order/open`);
  }

  prepareProduct(orderNumber: string, entryId: string): Observable<OrderView> {
    return this.http.post<OrderView>(`${this.httpUrl}/order/prepare-product`, {
      orderNumber,
      entryId
    } as PrepareProductRequest);
  }

  closeOrder(number: string): Observable<void> {
    return this.http.post<void>(`${this.httpUrl}/order/close`, { number } as CloseOrderRequest);
  }
}