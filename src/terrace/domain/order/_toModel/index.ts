
import { type Document, type Order } from '../definitions';

export default async function (document: Document): Promise<Order>
{
    const { _id: $0, ...order } = document;

    return order;
}
