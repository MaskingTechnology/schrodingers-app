
import getProductByCode from '../../product/getByCode';

import { type ProductOrder } from '../definitions';

export default async function (productCode: string): Promise<ProductOrder>
{
    const product = await getProductByCode(productCode);

    const { code, name, price } = product;

    return { code, name, price, quantity: 0 };
}
