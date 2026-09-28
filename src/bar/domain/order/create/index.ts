
import { type Event } from '@schrodinger/common/domain/order/sent';

import createDocument from './createDocument';
import persist from './persist';

export default async function (eventData: Event): Promise<void>
{
    const document = createDocument(eventData);

    return persist(document);
}
