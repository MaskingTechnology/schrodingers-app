
import type { Product as ProductViewModel } from '../product';

export const COLLECTION = 'terrace.orders';

export type State = 'OPEN' | 'SENT';

export type ProductRef =
{
    readonly entryId: string;
    readonly productCode: string;
};

export type Data =
{
    readonly _id: string;
    readonly createdAt: Date;
    readonly number: string;
    readonly tableNumber: string;
    readonly state: State;
    readonly productRefs: ProductRef[];
    readonly total: number;
};

export type Product = ProductViewModel &
{
    readonly entryId: string;
}

export type Order = Omit<Data, '_id' | 'productRefs'> &
{
    readonly products: Product[];
};
