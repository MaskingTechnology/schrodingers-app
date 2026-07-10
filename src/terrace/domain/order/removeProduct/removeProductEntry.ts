
import { Data, ProductData } from '../definitions';

export default function removeProductEntry(data: Data, productCode: string): ProductData[]
{
    return data.products.filter(product => product.code !== productCode);
}
