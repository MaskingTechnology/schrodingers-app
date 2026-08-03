import { Injectable } from '@nestjs/common';

import { database } from '@schrodinger/common/integrations';
import { generateId } from '@schrodinger/common/utilities';

import { COLLECTION as ORDER_COLLECTION } from './definitions';
import { COLLECTION as PRODUCT_COLLECTION } from '../product/definitions';
import type { OrderData, OrderView, ProductData, ProductRef, ProductView, State } from './types';

@Injectable()
export class OrderService
{
    async create(tableNumber: string): Promise<OrderView>
    {
        const data = this.#createOrderData(tableNumber);
        await database.insert<OrderData>(ORDER_COLLECTION, data);
        return this.#toView(data);
    }

    async getByNumber(number: string): Promise<OrderView>
    {
        const data = await this.#retrieveOrderData(number);
        this.#throwIfOrderNotFound(data, number);
        return this.#toView(data!);
    }

    async getOpenByTable(tableNumber: string): Promise<OrderView | undefined>
    {
        const data = await database.findOne<OrderData>(ORDER_COLLECTION, { tableNumber, state: 'OPEN' as State });
        if (data === undefined)
        {
            return undefined;
        }
        return this.#toView(data);
    }

    async addProduct(orderNumber: string, productCode: string): Promise<OrderView>
    {
        const orderData = await this.#retrieveOrderData(orderNumber);
        this.#throwIfOrderNotFound(orderData, orderNumber);

        const productView = await this.#retrieveProductByCode(productCode);
        if (productView === undefined)
        {
            throw new UnknownCode(productCode);
        }

        const order = orderData!;
        const productRef: ProductRef = { entryId: generateId(), productCode };
        const productRefs = [...order.productRefs, productRef];
        const total = order.total + productView.price;

        await database.updateOne<OrderData>(ORDER_COLLECTION, { _id: order._id }, { productRefs, total });

        return this.#toView({ ...order, productRefs, total });
    }

    async removeProduct(orderNumber: string, entryId: string): Promise<OrderView>
    {
        const orderData = await this.#retrieveOrderData(orderNumber);
        this.#throwIfOrderNotFound(orderData, orderNumber);

        const order = orderData!;
        const productRef = order.productRefs.find(ref => ref.entryId === entryId);

        if (productRef === undefined)
        {
            throw new UnknownEntry(orderNumber, entryId);
        }

        const productView = await this.#retrieveProductByCode(productRef.productCode);
        if (productView === undefined)
        {
            throw new UnknownCode(productRef.productCode);
        }

        const productRefs = order.productRefs.filter(ref => ref.entryId !== entryId);
        const total = order.total - productView.price;

        await database.updateOne<OrderData>(ORDER_COLLECTION, { _id: order._id }, { productRefs, total });

        return this.#toView({ ...order, productRefs, total });
    }

    async sendOrder(number: string): Promise<OrderView>
    {
        const data = await this.#retrieveOrderData(number);
        this.#throwIfOrderNotFound(data, number);

        const order = data!;
        const state: State = 'SENT';
        await database.updateOne<OrderData>(ORDER_COLLECTION, { _id: order._id }, { state });

        const view = await this.#toViewWithProducts({ ...order, state });
        await this.#publishOrder(view);
        return view;
    }

    async getAllProducts(): Promise<ProductData[]>
    {
        const list = await database.find<ProductData>(PRODUCT_COLLECTION, {});
        return list;
    }

    async getProductByCode(code: string): Promise<ProductData>
    {
        const data = await database.findOne<ProductData>(PRODUCT_COLLECTION, { code });
        if (data === undefined)
        {
            throw new UnknownCode(code);
        }
        return data;
    }

    // --- Order internal helpers ---

    async #retrieveOrderData(number: string): Promise<OrderData | undefined>
    {
        return database.findOne<OrderData>(ORDER_COLLECTION, { number });
    }

    #throwIfOrderNotFound(order: OrderData | undefined, number: string): void
    {
        if (order === undefined)
        {
            throw new UnknownNumber(number);
        }
    }

    #createOrderData(tableNumber: string): OrderData
    {
        const _id = generateId();
        const createdAt = new Date();
        const number = this.#generateOrderNumber();
        const state: State = 'OPEN';
        const productRefs: ProductRef[] = [];
        const total = 0;

        return { _id, createdAt, number, tableNumber, state, productRefs, total };
    }

    #generateOrderNumber(): string
    {
        // Simple incrementing number, padded to 3 digits
        // In production, this should come from a database sequence or counter collection
        return '001';
    }

    #toView(data: OrderData): OrderView
    {
        const { _id: $, productRefs: $1, ...viewData } = data;
        return { ...viewData, products: [] };
    }

    async #toViewWithProducts(data: OrderData): Promise<OrderView>
    {
        const { _id: $0, productRefs: $1, ...viewData } = data;

        const productViews = await Promise.all(
            data.productRefs.map(ref => this.#retrieveProductByCode(ref.productCode))
        );

        const products: ProductView[] = data.productRefs.map((ref, index) =>
        {
            const pv = productViews[index]!;
            return { entryId: ref.entryId, code: pv.code, name: pv.name, price: pv.price, imageUrl: pv.imageUrl };
        });

        return { ...viewData, products };
    }

    // --- Product internal helpers ---

    async #retrieveProductByCode(code: string): Promise<ProductData | undefined>
    {
        return database.findOne<ProductData>(PRODUCT_COLLECTION, { code });
    }

    async #publishOrder(view: OrderView): Promise<void>
    {
        // Placeholder for order publishing logic
        // This would integrate with the common domain/order/sent module
    }
}

export class UnknownNumber extends Error
{
    constructor(number: string)
    {
        super(`The order number '${number}' is unknown`);
    }
}

export class UnknownEntry extends Error
{
    constructor(orderNumber: string, entryId: string)
    {
        super(`The entry id '${entryId}' for order '${orderNumber}' is unknown`);
    }
}

export class UnknownCode extends Error
{
    constructor(code: string)
    {
        super(`The product code '${code}' is unknown`);
    }
}