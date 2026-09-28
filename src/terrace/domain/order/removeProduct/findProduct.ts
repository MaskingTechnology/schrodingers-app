
import { type Document, type ProductOrder } from '../definitions';

import ProductNotFound from './ProductNotFound';

export default function (document: Document, productCode: string): ProductOrder
{
    const product = document.products.find(product => product.code === productCode);
    
    if (product === undefined)
    {
        throw new ProductNotFound(document.number, productCode);
    }

    return product;
}
