
import { database } from '@schrodinger/common/integrations';

import { COLLECTION, type Document } from '../definitions';

export default async function (number: string): Promise<Document | undefined>
{
    return database.findOne<Document>(COLLECTION, { number });
}
