
import type { OrderView } from '../types';

import getProductByCode from '../../product/getByCode';

import _getOrderByNumber from '../_getByNumber';
import _toView from '../_toView';

import persist from './persist';
import UnknownEntry from './UnknownEntry';

export default async function removeProduct(orderNumber: string, entryId: string): Promise<OrderView>
{
    const orderData = await _getOrderByNumber(orderNumber)
    const productRef = orderData.productRefs.find(ref => ref.entryId === entryId);

    if (productRef === undefined)
    {
        throw new UnknownEntry(orderNumber, entryId);
    }

    const productView = await getProductByCode(productRef.productCode);

    const productRefs = orderData.productRefs.filter(ref => ref.entryId !== entryId);
    const total = orderData.total - productView.price;

    await persist(orderData, productRefs, total);

    return _toView({ ...orderData, productRefs, total });
}
