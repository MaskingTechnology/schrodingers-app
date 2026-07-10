
export const COLLECTION = 'terrace.orders';

export type State = 'OPEN' | 'SENT';

export type ProductData =
{
    readonly code: string;
    readonly quantity: number;
};

export type Data =
{
    readonly _id: string;
    readonly createdAt: Date;
    readonly number: string;
    readonly tableNumber: string;
    readonly state: State;
    readonly products: ProductData[];
    readonly totalPrice: number;
};

export type Product =
{
    readonly code: string;
    readonly name: string;
    readonly price: number;
    readonly quantity: number;
}

export type Order = Omit<Data, '_id' | 'products'> &
{
    readonly products: Product[];
};
