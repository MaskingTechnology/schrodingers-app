
import { database } from '^/integrations';

import { COLLECTION, type Document } from '../definitions';

export default async function (): Promise<Document[]>
{
    return database.find<Document>(COLLECTION, {});
}
