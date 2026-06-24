
import { database } from '@schrodinger/common/integrations';

import { COLLECTION } from '../definitions';
import type { OrderData } from '../types';

export default async function retrieve(): Promise<OrderData[]>
{
    return database.find<OrderData>(COLLECTION, { state: 'OPEN' });
}
