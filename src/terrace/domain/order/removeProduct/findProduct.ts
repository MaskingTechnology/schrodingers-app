
import { Data, ProductData } from '../definitions';

import ProductNotFound from './ProductNotFound';

export default function findProduct(data: Data, productCode: string): ProductData
{
    const product = data.products.find(product => product.code === productCode);
    
    if (product === undefined)
    {
        throw new ProductNotFound(data.number, productCode);
    }

    return product;
}
