
import { database } from '^/integrations';

import { COLLECTION, type Document, type ProductOrder } from '../definitions';

export default async function (_id: string, products: ProductOrder[], totalPrice: number): Promise<void>
{
    return database.updateOne<Document>(COLLECTION, { _id }, { products, totalPrice });
}
