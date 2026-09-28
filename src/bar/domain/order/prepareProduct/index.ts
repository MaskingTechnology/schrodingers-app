
import { type Order } from '../definitions';
import retrieveByNumber from '../_retrieveByNumber';
import toModel from '../_toModel';

import markPrepared from './markPrepared';
import persist from './persist';

export default async function (orderNumber: string, entryId: string): Promise<Order>
{
    const document = await retrieveByNumber(orderNumber);

    const products = markPrepared(document, entryId);

    await persist(document._id, products);

    return toModel({ ...document, products });
}
