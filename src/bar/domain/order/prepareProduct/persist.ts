
import { database } from '@schrodinger/common/integrations';

import { COLLECTION, type Data, type Product } from '../definitions';

export default async function persist(_id: string, products: Product[]): Promise<void>
{
    return database.updateOne<Data>(COLLECTION, { _id }, { products });
}
