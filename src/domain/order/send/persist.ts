
import { database } from '^/integrations';

import { COLLECTION, type Document, type State } from '../definitions';

export default async function (_id: string, state: State): Promise<void>
{
    return database.updateOne<Document>(COLLECTION, { _id }, { state });
}
