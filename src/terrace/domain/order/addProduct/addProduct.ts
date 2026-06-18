
import type { ViewModel } from '../types';

import _getByNumber from '../_getByNumber';
import toView from '../toView';

import persist from './persist';

export default async function addProduct(number: string, productCode: string): Promise<ViewModel>
{
    const data = await _getByNumber(number);

    const productCodes = [...data.productCodes, productCode];

    await persist(data, productCodes);

    return toView({ ...data, productCodes });
}
