
import { database } from '@schrodinger/common/integrations';

import { COLLECTION } from '../definitions';
import type { DataModel } from '../types';

export default async function retrieve(): Promise<DataModel[]>
{
    return database.find<DataModel>(COLLECTION, { state: 'OPEN' });
}
