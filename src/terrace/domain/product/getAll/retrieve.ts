
import { database } from '@schrodinger/common/integrations';

import { COLLECTION, type Data } from '../definitions';

export default async function retrieveAll(): Promise<Data[]>
{
    return database.find(COLLECTION, {}) as Promise<Data[]>;
}
