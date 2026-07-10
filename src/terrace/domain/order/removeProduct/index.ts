
import getProductByCode from '../../product/getByCode';

import type { Order } from '../definitions';
import retrieveOrderByNumber from '../_retrieveByNumber';
import toModel from '../_toModel';

import persist from './persist';
import UnknownEntry from './UnknownEntry';

export default async function run(orderNumber: string, entryId: string): Promise<Order>
{
    const orderData = await retrieveOrderByNumber(orderNumber)
    const productRef = orderData.productRefs.find(ref => ref.entryId === entryId);

    if (productRef === undefined)
    {
        throw new UnknownEntry(orderNumber, entryId);
    }

    const productView = await getProductByCode(productRef.productCode);

    const productRefs = orderData.productRefs.filter(ref => ref.entryId !== entryId);
    const total = orderData.total - productView.price;

    await persist(orderData._id, productRefs, total);

    return toModel({ ...orderData, productRefs, total });
}

export { UnknownEntry };
