import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { OrderService } from './services/order.service';
import type { OrderView } from './models/order.types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  template: `
    <div class="layout">
      <header>
        <div class="header-row">
          <h1>Schrödinger's Bar</h1>
          <button class="btn btn-secondary" (click)="refresh()">Refresh</button>
        </div>
      </header>
      <main>
        <div class="order-grid">
          <ng-container *ngIf="orders.length > 0; else noOrders">
            <div *ngFor="let order of orders" class="order-card">
              <h3 class="order-title">Order #{{ order.number }} | Table {{ order.tableNumber }}</h3>
              <div class="product-list">
                <div *ngFor="let product of order.products; let i = index" class="product-row" *ngIf="!product.prepared">
                  <span class="product-name">{{ product.name }}</span>
                  <button class="btn btn-secondary" (click)="onProductPrepared(order.number, product.entryId)">✔</button>
                </div>
              </div>
              <div class="product-ready-msg" *ngIf="order.products.every((p) => p.prepared)">
                Order is ready to be served.
              </div>
              <button class="btn btn-primary" (click)="onClose(order.number)">Close order</button>
            </div>
          </ng-container>
          <ng-template #noOrders>
            <p class="no-orders">(no orders)</p>
          </ng-template>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .layout {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    header {
      padding: 1rem;
      background-color: #f5f5f5;
      border-bottom: 1px solid #ddd;
    }

    .header-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    main {
      flex: 1;
      padding: 1rem;
    }

    .order-grid {
      display: grid;
      gap: 1rem;
    }

    .order-card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 1rem;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .order-title {
      margin: 0 0 1rem 0;
      font-size: 1.1rem;
    }

    .product-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .product-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem;
    }

    .product-name {
      flex: 1;
    }

    .product-ready-msg {
      color: #666;
      font-style: italic;
      margin: 0.5rem 0;
    }

    .no-orders {
      color: #666;
      text-align: center;
    }

    .btn {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.9rem;
    }

    .btn-primary {
      background-color: #007bff;
      color: white;
    }

    .btn-primary:hover {
      background-color: #0056b3;
    }

    .btn-secondary {
      background-color: #6c757d;
      color: white;
    }

    .btn-secondary:hover {
      background-color: #495057;
    }
  `
})
export class AppComponent implements OnInit {
  private readonly orderService = inject(OrderService);

  orders: OrderView[] = [];

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.orderService.getOpenOrders().subscribe({
      next: (orders: OrderView[]) => {
        this.orders = orders;
      },
      error: (error: unknown) => {
        console.error('Failed to fetch orders:', error);
      }
    });
  }

  onProductPrepared(orderNumber: string, entryId: string): void {
    this.orderService.prepareProduct(orderNumber, entryId).subscribe({
      next: (updatedOrder: OrderView) => {
        const orderIndex = this.orders.findIndex(order => order.number === orderNumber);
        if (orderIndex !== -1) {
          const updatedOrders = [...this.orders];
          updatedOrders[orderIndex] = updatedOrder;
          this.orders = updatedOrders;
        }
      },
      error: (error: unknown) => {
        console.error('Failed to prepare product:', error);
      }
    });
  }

  onClose(orderNumber: string): void {
    this.orderService.closeOrder(orderNumber).subscribe({
      next: () => {
        this.orders = this.orders.filter(order => order.number !== orderNumber);
      },
      error: (error: unknown) => {
        console.error('Failed to close order:', error);
      }
    });
  }
}