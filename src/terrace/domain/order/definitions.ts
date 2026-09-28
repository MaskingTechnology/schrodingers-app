
export const COLLECTION = 'terrace.orders';

export type State = 'OPEN' | 'SENT';

export type ProductOrder =
{
    readonly code: string;
    readonly name: string;
    readonly price: number;
    readonly quantity: number;
}

export type Order =
{
    readonly createdAt: Date;
    readonly number: string;
    readonly tableNumber: string;
    readonly state: State;
    readonly products: ProductOrder[];
    readonly totalPrice: number;
};

export type Document = Order &
{
    readonly _id: string;
};
