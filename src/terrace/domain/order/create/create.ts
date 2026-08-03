
import type { OrderView } from '../types';

import _toView from '../_toView';

import createData from './createData';
import persist from './persist';

export default async function create(tableNumber: string): Promise<OrderView>
{
    const data = createData(tableNumber);

    await persist(data);

    return _toView(data);
}
