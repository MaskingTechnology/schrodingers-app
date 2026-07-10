
import getProductByCode from '~/product/getByCode';

import type { Order } from '../definitions';
import retrieveOrderByNumber from '../_retrieveByNumber';
import toModel from '../_toModel';

import removeProductEntry from './removeProductEntry';
import persist from './persist';
import updatedProductEntry from './updateProductEntry';
import findProduct from './findProduct';

export default async function run(orderNumber: string, productCode: string): Promise<Order>
{
    const [orderData, productModel] = await Promise.all(
    [
        retrieveOrderByNumber(orderNumber),
        getProductByCode(productCode)
    ]);

    const product = findProduct(orderData, productCode);

    const products = product.quantity <= 1
        ? removeProductEntry(orderData, productCode)
        : updatedProductEntry(orderData, product);
    
    const totalPrice = orderData.totalPrice - productModel.price;

    await persist(orderData._id, products, totalPrice);

    return toModel({ ...orderData, products, totalPrice });
}
