
import type { Product } from '~/product';
import getProductByCode from '~/product/getByCode';

import type { Data } from '../definitions';

export default function getProductModels(data: Data): Promise<Product[]>
{
    return Promise.all(
        data.products.map(productData => getProductByCode(productData.code))
    );
}
