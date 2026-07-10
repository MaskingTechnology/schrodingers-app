
import { database } from '@schrodinger/common/integrations';

import { COLLECTION, type Data } from '../definitions';

export default async function persist(data: Data): Promise<void>
{
    return database.insert(COLLECTION, data);
}
