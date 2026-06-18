
import { ViewModel as ProductViewModel } from '../product/types';

export type State = 'CREATED' | 'SENT';

export type DataModel =
{
    readonly _id: string;
    readonly createdAt: Date;
    readonly number: string;
    readonly state: State;
    readonly productCodes: string[];
};

export type ViewModel = Omit<DataModel, '_id' | 'productCodes'> &
{
    readonly products: ProductViewModel[];
};
