
import type { OrderView } from '../types';

import _getByNumber from '../_getByNumber';
import _toView from '../_toView';

import markPrepared from './markPrepared';
import persist from './persist';

export default async function preparedProduct(orderNumber: string, entryId: string): Promise<OrderView>
{
    const data = await _getByNumber(orderNumber);

    const products = markPrepared(data, entryId);

    await persist(data, products);

    return _toView({ ...data, products });
}
