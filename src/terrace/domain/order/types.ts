
import { ProductView as ProductViewModel } from '../product/types';

export type State = 'CREATED' | 'SENT';

export type ProductRef =
{
    entryId: string;
    productCode: string;
};

export type OrderData =
{
    readonly _id: string;
    readonly createdAt: Date;
    readonly number: string;
    readonly tableNumber: string;
    readonly state: State;
    readonly productRefs: ProductRef[];
    readonly total: number;
};

export type ProductView = ProductViewModel &
{
    entryId: string;
}

export type OrderView = Omit<OrderData, '_id' | 'productRefs'> &
{
    readonly products: ProductView[];
};
