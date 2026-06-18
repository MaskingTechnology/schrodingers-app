
import { database } from '@schrodinger/common/integrations';

import type { DataModel, State } from '../types';

import { COLLECTION } from '../definitions';

export default async function persist(data: DataModel, state: State): Promise<void>
{
    return database.updateOne(COLLECTION, { _id: data._id }, { state });
}
