
import { generateId } from '@schrodinger/common/utilities';

import type { OrderView } from '../types';

import getProductByCode from '../../product/getByCode';

import _getOrderByNumber from '../_getByNumber';
import _toView from '../_toView';

import persist from './persist';

export default async function addProduct(orderNumber: string, productCode: string): Promise<OrderView>
{
    const [orderData, productView] = await Promise.all(
    [
        _getOrderByNumber(orderNumber),
        getProductByCode(productCode)
    ]);

    const productRef = { entryId: generateId(), productCode };
    const productRefs = [...orderData.productRefs, productRef];
    const total = orderData.total + productView.price;

    await persist(orderData._id, productRefs, total);

    return _toView({ ...orderData, productRefs, total });
}
