
import { database } from '@schrodinger/common/integrations';

import { COLLECTION } from '../definitions';
import type { DataModel } from '../types';

export default async function retrieve(code: string): Promise<DataModel | undefined>
{
    return database.findOne(COLLECTION, { code }) as Promise<DataModel | undefined>;
}
