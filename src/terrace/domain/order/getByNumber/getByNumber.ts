
import type { OrderView } from '../types';

import _getByNumber from '../_getByNumber';
import _toView from '../_toView';

export default async function getByNumber(number: string): Promise<OrderView>
{
    const data = await _getByNumber(number);

    return _toView(data);
}
