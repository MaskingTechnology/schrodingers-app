
import type { EventData } from '@schrodinger/common/domain/order/sent';

import createData from './createData';
import persist from './persist';

export default async function create(eventData: EventData): Promise<void>
{
    const data = createData(eventData);

    return persist(data);
}
