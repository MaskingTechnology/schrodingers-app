
import { database } from '@schrodinger/common/integrations';

import type { DataModel } from '../types';

import { COLLECTION } from '../definitions';

export default async function persist(data: DataModel): Promise<void>
{
    return database.insert(COLLECTION, data);
}
