
import type { Event } from '@schrodinger/common/domain/order/sent';

import createData from './createData';
import persist from './persist';

export default async function run(eventData: Event): Promise<void>
{
    const data = createData(eventData);

    return persist(data);
}

export { default as subscribe } from '../subscriptions';
