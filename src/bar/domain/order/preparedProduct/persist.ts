
import { database } from '@schrodinger/common/integrations';

import type { DataModel, Product } from '../types';

import { COLLECTION } from '../definitions';

export default async function persist(data: DataModel, products: Product[]): Promise<void>
{
    return database.updateOne<DataModel>(COLLECTION, { _id: data._id }, { products });
}
