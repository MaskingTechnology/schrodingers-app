
import { database } from '@schrodinger/common/integrations';

import type { DataModel } from '../types';

import { COLLECTION } from '../definitions';

export default async function persist(data: DataModel, productCodes: string[]): Promise<void>
{
    return database.updateOne(COLLECTION, { _id: data._id }, { productCodes });
}
