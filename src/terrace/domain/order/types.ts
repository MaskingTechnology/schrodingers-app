
import { ViewModel as ProductViewModel } from '../product/types';

export type State = 'CREATED' | 'SENT';

export type DataModel =
{
    readonly _id: string;
    readonly createdAt: Date;
    readonly number: string;
    readonly tableNumber: string;
    readonly state: State;
    readonly productCodes: string[];
    readonly total: number;
};

export type ViewModel = Omit<DataModel, '_id' | 'productCodes'> &
{
    readonly products: ProductViewModel[];
};
