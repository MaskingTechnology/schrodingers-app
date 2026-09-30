
import { database } from '^/integrations';

import { COLLECTION, type Document } from '../definitions';

export default async function (tableNumber: string): Promise<Document | undefined>
{
    return database.findOne<Document>(COLLECTION, { tableNumber, state: 'OPEN' });
}
