
import { type Order } from '../definitions';
import retrieveByNumber from '../_retrieveByNumber';
import toModel from '../_toModel';

import findProduct from './findProduct';
import updateQuantity from './updateQuantity';
import updateProducts from './updateProducts';
import persist from './persist';
import updateTotalPrice from './updateTotalPrice';

export default async function (orderNumber: string, productCode: string): Promise<Order>
{
    const document = await retrieveByNumber(orderNumber);

    const productOrder = findProduct(document, productCode);

    const updateProductOrder = updateQuantity(productOrder);

    const products = updateProducts(document, updateProductOrder);
    
    const totalPrice = updateTotalPrice(document, updateProductOrder);

    await persist(document._id, products, totalPrice);

    return toModel({ ...document, products, totalPrice });
}
