
import { database } from '@schrodinger/common/integrations';

import type { OrderData, State } from '../types';

import { COLLECTION } from '../definitions';

export default async function persist(data: OrderData, state: State): Promise<void>
{
    return database.updateOne<OrderData>(COLLECTION, { _id: data._id }, { state });
}
