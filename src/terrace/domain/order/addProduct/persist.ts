
import { database } from '@schrodinger/common/integrations';

import type { DataModel } from '../types';

import { COLLECTION } from '../definitions';

export default async function persist(data: DataModel, productCodes: string[], total: number): Promise<void>
{
    return database.updateOne<DataModel>(COLLECTION, { _id: data._id }, { productCodes, total });
}
