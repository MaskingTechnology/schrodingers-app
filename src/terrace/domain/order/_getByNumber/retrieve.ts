
import { database } from '@schrodinger/common/integrations';

import { COLLECTION } from '../definitions';
import type { DataModel } from '../types';

export default async function retrieve(number: string): Promise<DataModel | undefined>
{
    return database.findOne(COLLECTION, { number }) as Promise<DataModel | undefined>;
}
