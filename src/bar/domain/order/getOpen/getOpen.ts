
import type { OrderView } from '../types';

import _toView from '../_toView';

import retrieve from './retrieve';

export default async function getOpen(): Promise<OrderView[]>
{
    const list = await retrieve();

    return list.map(data => _toView(data));
}
