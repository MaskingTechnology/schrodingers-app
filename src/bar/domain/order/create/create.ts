
import type { SentEvent } from '@schrodinger/common/domain/order';

import createData from './createData';
import persist from './persist';

export default async function create(eventData: SentEvent): Promise<void>
{
    const data = createData(eventData);

    return persist(data);
}
