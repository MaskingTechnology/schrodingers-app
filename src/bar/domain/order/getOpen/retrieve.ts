
import { database } from '@schrodinger/common/integrations';

import { COLLECTION, type Data } from '../definitions';

export default async function retrieve(): Promise<Data[]>
{
    return database.find<Data>(COLLECTION, { state: 'OPEN' });
}
