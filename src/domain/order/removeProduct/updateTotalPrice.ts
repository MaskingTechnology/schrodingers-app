
import { type Document, type ProductOrder } from '../definitions';

export default function (document: Document, productOrder: ProductOrder) : number
{
    return document.totalPrice - productOrder.price;
}
