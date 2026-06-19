
import _getByNumber from '../_getByNumber';

import persist from './persist';
import NoProduct from './NoProduct';

export default async function preparedProduct(orderNumber: string, productIndex: number): Promise<void>
{
    const data = await _getByNumber(orderNumber);

    const product = data.products[productIndex];

    if (product === undefined)
    {
        throw new NoProduct(orderNumber, productIndex);
    }

    data.products[productIndex] = { ...product, prepared: true };

    return persist(data, data.products);
}
