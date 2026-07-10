
import type { Order } from '../definitions';
import toModel from '../_toModel';

import createData from './createData';
import persist from './persist';

export default async function run(tableNumber: string): Promise<Order>
{
    const data = createData(tableNumber);

    await persist(data);

    return toModel(data);
}
