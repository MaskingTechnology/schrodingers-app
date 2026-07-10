
import getProductByCode from '~/product/getByCode';

import type { Order } from '../definitions';
import retrieveOrderByNumber from '../_retrieveByNumber';
import toModel from '../_toModel';

import addProductEntry from './addProductEntry';
import persist from './persist';
import updateProductEntry from './updateProductEntry';

export default async function run(orderNumber: string, productCode: string): Promise<Order>
{
    const [orderData, productModel] = await Promise.all(
    [
        retrieveOrderByNumber(orderNumber),
        getProductByCode(productCode)
    ]);

    const product = orderData.products.find(product => product.code === productCode);

    const products = product === undefined
        ? addProductEntry(orderData, productCode)
        : updateProductEntry(orderData, product);
    
    const totalPrice = orderData.totalPrice + productModel.price;

    await persist(orderData._id, products, totalPrice);

    return toModel({ ...orderData, products, totalPrice });
}
