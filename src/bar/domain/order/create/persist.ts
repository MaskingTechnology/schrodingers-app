
import { database } from '@schrodinger/common/integrations';

import type { OrderData } from '../types';

import { COLLECTION } from '../definitions';

export default async function persist(data: OrderData): Promise<void>
{
    return database.insert(COLLECTION, data);
}
