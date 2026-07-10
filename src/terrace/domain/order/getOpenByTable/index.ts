
import type { Order } from '../definitions';
import toModel from '../_toModel';

import retrieve from './retrieve';

export default async function run(tableNumber: string): Promise<Order | undefined>
{
    const data = await retrieve(tableNumber);

    if (data === undefined)
    {
        return undefined;
    }

    return toModel(data);
}
