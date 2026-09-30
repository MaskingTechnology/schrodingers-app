
import { type Document, type ProductOrder } from '../definitions';

export default function (document: Document, productCode: string): ProductOrder | undefined
{
    return document.products.find(product => product.code === productCode);
}
