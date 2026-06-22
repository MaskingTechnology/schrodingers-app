
import { database } from '@schrodinger/common/integrations';

import type { OrderData, Product } from '../types';

import { COLLECTION } from '../definitions';

export default async function persist(data: OrderData, products: Product[]): Promise<void>
{
    return database.updateOne<OrderData>(COLLECTION, { _id: data._id }, { products });
}
