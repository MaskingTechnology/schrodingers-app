
import { database } from '@schrodinger/common/integrations';

import { COLLECTION, type Document, type Product } from '../definitions';

export default async function (_id: string, products: Product[]): Promise<void>
{
    return database.updateOne<Document>(COLLECTION, { _id }, { products });
}
