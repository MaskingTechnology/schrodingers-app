
import { type Document, type ProductOrder } from '../definitions';

export default function (document: Document, productOrder: ProductOrder): ProductOrder[]
{
    const products = [...document.products];

    const index = products.findIndex(product => product.code === productOrder.code);

    if (index !== -1)
    {
        products[index] = productOrder;
    }
    else
    {
        products.push(productOrder);
    }

    return products;
}
