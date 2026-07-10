
import { Data, ProductData } from '../definitions';

export default function addProductEntry(data: Data, productCode: string): ProductData[]
{
    const product = { code: productCode, quantity: 1 };

    return [ ...data.products, product ];
}
