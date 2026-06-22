
import _getByNumber from '../_getByNumber';

import markPrepared from './markPrepared';
import persist from './persist';

export default async function preparedProduct(orderNumber: string, entryId: string): Promise<void>
{
    const data = await _getByNumber(orderNumber);

    const products = markPrepared(data, entryId);

    return persist(data, products);
}
