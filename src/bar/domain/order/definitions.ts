
export const COLLECTION = 'bar.orders';

export type State = 'OPEN' | 'CLOSED';

export type Product =
{
    readonly entryId: string;
    readonly code: string;
    readonly name: string;
    readonly prepared: boolean;
};

export type Data =
{
    readonly _id: string;
    readonly number: string;
    readonly tableNumber: string;
    readonly openedAt: Date;
    readonly state: State;
    readonly products: Product[];
};

export type Order = Omit<Data, '_id'>;
