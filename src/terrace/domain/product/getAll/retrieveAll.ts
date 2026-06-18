
import { database } from '@schrodinger/common/integrations';

import { COLLECTION } from '../definitions';
import type { DataModel } from '../types';

export default async function retrieveAll(): Promise<DataModel[]>
{
    return database.find(COLLECTION, {}) as Promise<DataModel[]>;
}
