
import { type Document, type Order } from '../definitions';

export default function (document: Document): Order
{
    const { _id: $, ...order } = document;

    return order;
}
