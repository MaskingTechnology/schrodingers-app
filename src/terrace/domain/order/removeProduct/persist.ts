
import { database } from '@schrodinger/common/integrations';

import { COLLECTION, type Data, type ProductRef } from '../definitions';

export default async function persist(_id: string, productRefs: ProductRef[], total: number): Promise<void>
{
    return database.updateOne<Data>(COLLECTION, { _id }, { productRefs, total });
}
