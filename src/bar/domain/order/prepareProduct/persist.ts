
import { database } from '@schrodinger/common/integrations';

import type { OrderData, Product } from '../types';

import { COLLECTION } from '../definitions';

export default async function persist(_id: string, products: Product[]): Promise<void>
{
    return database.updateOne<OrderData>(COLLECTION, { _id }, { products });
}
