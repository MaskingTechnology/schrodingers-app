import { Injectable } from '@nestjs/common';

import { EventData } from '@schrodinger/common/domain/order/sent';
import { subscribe } from '@schrodinger/common/domain/order/sent';
import { database } from '@schrodinger/common/integrations';

import { COLLECTION } from './definitions';
import type { OrderData, OrderView, Product, State } from './types';

@Injectable()
export class OrderService
{
    async getByOrderNumber(orderNumber: string): Promise<OrderView>
    {
        const data = await this.#retrieveOrderData(orderNumber);
        this.#throwIfOrderNotFound(data, orderNumber);
        return this.#toView(data!);
    }

    async getOpenOrders(): Promise<OrderView[]>
    {
        const list = await this.#getOpenOrdersData();
        return list.map(data => this.#toView(data));
    }

    async closeOrder(number: string): Promise<void>
    {
        const data = await this.#retrieveOrderData(number);
        this.#throwIfOrderNotFound(data, number);
        await this.#persistClose(data._id, 'CLOSED');
    }

    async createOrder(eventData: EventData): Promise<void>
    {
        const data = this.#createOrderData(eventData);
        await this.#persistOrder(data);
    }

    async initializeSubscription(): Promise<void>
    {
        return subscribe(this.createOrder.bind(this));
    }

    async prepareProduct(orderNumber: string, entryId: string): Promise<OrderView>
    {
        const data = await this.#retrieveOrderData(orderNumber);
        this.#throwIfOrderNotFound(data, orderNumber);

        const products = this.#markProductsPrepared(data!, entryId);
        await this.#persistProducts(data!._id, products);

        return this.#toView({ ...data, products } as OrderData);
    }

    // --- Internal helpers ---

    async #retrieveOrderData(number: string): Promise<OrderData | undefined>
    {
        const order = await database.findOne<OrderData>(COLLECTION, { number });
        return order;
    }

    #throwIfOrderNotFound(order: OrderData | undefined, number: string): void
    {
        if (order === undefined)
        {
            throw new OrderNotFoundException(number);
        }
    }

    #toView(data: OrderData): OrderView
    {
        const { _id: $, ...viewData } = data;
        return viewData;
    }

    async #getOpenOrdersData(): Promise<OrderData[]>
    {
        return database.find<OrderData>(COLLECTION, { state: 'OPEN' });
    }

    async #persistClose(_id: string, state: State): Promise<void>
    {
        return database.updateOne<OrderData>(COLLECTION, { _id }, { state });
    }

    #createOrderData(eventData: EventData): OrderData
    {
        const _id = this.#generateId();
        const { number, tableNumber } = eventData;
        const openedAt = new Date();
        const state: State = 'OPEN';
        const products = eventData.products.map(product =>
        {
            const entryId = this.#generateId();
            const { code, name } = product;
            const prepared = false;
            return { entryId, code, name, prepared };
        });

        return { _id, number, tableNumber, openedAt, state, products };
    }

    async #persistOrder(data: OrderData): Promise<void>
    {
        return database.insert(COLLECTION, data);
    }

    #markProductsPrepared(data: OrderData, entryId: string): Product[]
    {
        return data.products.map(product =>
        {
            const copy = { ...product };
            if (product.entryId === entryId)
            {
                copy.prepared = true;
            }
            return copy;
        });
    }

    async #persistProducts(_id: string, products: Product[]): Promise<void>
    {
        return database.updateOne<OrderData>(COLLECTION, { _id }, { products });
    }

    #generateId(): string
    {
        // Reuse the common generateId when available
        return crypto.randomUUID();
    }
}

export class OrderNotFoundException extends Error
{
    constructor(number: string)
    {
        super(`The order number '${number}' is unknown`);
    }
}