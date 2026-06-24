
import { database } from '^/integrations';

import { COLLECTION } from '../definitions';
import type { OrderData } from '../types';

export default async function retrieve(tableNumber: string): Promise<OrderData | undefined>
{
    return database.findOne<OrderData>(COLLECTION, { tableNumber, state: 'OPEN' });
}
