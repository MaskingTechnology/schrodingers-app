
import { generateId } from '@schrodinger/common/utilities';

import getProductByCode from '~/product/getByCode';

import type { Order } from '../definitions';
import retrieveOrderByNumber from '../_retrieveByNumber';
import toModel from '../_toModel';

import persist from './persist';

export default async function run(orderNumber: string, productCode: string): Promise<Order>
{
    const [orderData, productView] = await Promise.all(
    [
        retrieveOrderByNumber(orderNumber),
        getProductByCode(productCode)
    ]);

    const productRef = { entryId: generateId(), productCode };
    const productRefs = [...orderData.productRefs, productRef];
    const total = orderData.total + productView.price;

    await persist(orderData._id, productRefs, total);

    return toModel({ ...orderData, productRefs, total });
}
