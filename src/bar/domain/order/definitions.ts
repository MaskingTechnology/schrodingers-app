
export const COLLECTION = 'bar.orders';

export type State = 'OPEN' | 'CLOSED';

export type Product =
{
    readonly entryId: string;
    readonly code: string;
    readonly name: string;
    readonly quantity: number;
    readonly prepared: boolean;
};

export type Order =
{
    readonly number: string;
    readonly tableNumber: string;
    readonly openedAt: Date;
    readonly state: State;
    readonly products: Product[];
};

export type Document = Order &
{
    readonly _id: string;
}
