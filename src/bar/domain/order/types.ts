
export type State = 'OPEN' | 'CLOSED';

export type Product =
{
    readonly code: string;
    readonly name: string;
    readonly prepared: boolean;
};

export type DataModel =
{
    readonly _id: string;
    readonly number: string;
    readonly tableNumber: string;
    readonly openedAt: Date;
    readonly state: State;
    readonly products: Product[];
};

export type ViewModel = Omit<DataModel, '_id'>;
