
import type { ViewModel } from '../types';

import getProductByCode from '../../product/getByCode';

import _getOrderByNumber from '../_getByNumber';
import _toView from '../_toView';

import persist from './persist';

export default async function addProduct(orderNumber: string, productCode: string): Promise<ViewModel>
{
    const [orderData, productView] = await Promise.all(
    [
        _getOrderByNumber(orderNumber),
        getProductByCode(productCode)
    ]);

    const productCodes = [...orderData.productCodes, productCode];
    const total = orderData.total + productView.price;

    await persist(orderData, productCodes, total);

    return _toView({ ...orderData, productCodes, total });
}
