
import { database } from '@schrodinger/common/integrations';

import type { OrderData, ProductRef } from '../types';

import { COLLECTION } from '../definitions';

export default async function persist(data: OrderData, productRefs: ProductRef[], total: number): Promise<void>
{
    return database.updateOne<OrderData>(COLLECTION, { _id: data._id }, { productRefs, total });
}
