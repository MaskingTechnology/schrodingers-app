
import { database } from '@schrodinger/common/integrations';

import { COLLECTION, type Data, type ProductData } from '../definitions';

export default async function persist(_id: string, products: ProductData[], totalPrice: number): Promise<void>
{
    return database.updateOne<Data>(COLLECTION, { _id }, { products, totalPrice });
}
