
import type { Order } from '../definitions';
import toModel from '../_toModel';

import createDocument from './createDocument';
import persist from './persist';

export default async function (tableNumber: string): Promise<Order>
{
    const document = createDocument(tableNumber);

    await persist(document);

    return toModel(document);
}
