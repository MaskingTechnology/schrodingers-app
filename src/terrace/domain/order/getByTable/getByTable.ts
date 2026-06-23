
import { OrderView } from '../types';

import _toView from '../_toView';

import retrieve from './retrieve';

export default async function getByTable(tableNumber: string): Promise<OrderView | undefined>
{
    const data = await retrieve(tableNumber);

    if (data === undefined)
    {
        return undefined;
    }

    return _toView(data);
}
