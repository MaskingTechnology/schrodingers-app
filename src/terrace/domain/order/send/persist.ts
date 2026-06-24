
import { database } from '@schrodinger/common/integrations';

import type { OrderData, State } from '../types';

import { COLLECTION } from '../definitions';

export default async function persist(_id: string, state: State): Promise<void>
{
    return database.updateOne<OrderData>(COLLECTION, { _id }, { state });
}
