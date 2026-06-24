
import { database } from '@schrodinger/common/integrations';

import { COLLECTION } from '../definitions';
import type { OrderData } from '../types';

export default async function retrieve(number: string): Promise<OrderData | undefined>
{
    return database.findOne(COLLECTION, { number }) as Promise<OrderData | undefined>;
}
