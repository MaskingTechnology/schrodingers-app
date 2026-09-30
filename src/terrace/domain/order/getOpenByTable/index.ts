
import { type Order } from '../definitions';
import toModel from '../_toModel';

import retrieve from './retrieve';

export default async function (tableNumber: string): Promise<Order | undefined>
{
    const document = await retrieve(tableNumber);

    if (document === undefined)
    {
        return undefined;
    }

    return toModel(document);
}
