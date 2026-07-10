
import type { Order } from '../definitions';

import retrieveByNumber from '../_retrieveByNumber';
import toModel from '../_toModel';

import markPrepared from './markPrepared';
import persist from './persist';

export default async function run(orderNumber: string, entryId: string): Promise<Order>
{
    const data = await retrieveByNumber(orderNumber);

    const products = markPrepared(data, entryId);

    await persist(data._id, products);

    return toModel({ ...data, products });
}
