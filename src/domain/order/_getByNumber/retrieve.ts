
import { database } from '^/integrations';

import { COLLECTION } from '../definitions';
import type { OrderData } from '../types';

export default async function retrieve(number: string): Promise<OrderData | undefined>
{
    return database.findOne<OrderData>(COLLECTION, { number });
}
