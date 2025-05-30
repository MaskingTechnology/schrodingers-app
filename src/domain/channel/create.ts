
import type { DataModel } from './types';
import database from './database';

export default async function create(personId: string, type: string, value: string): Promise<string>
{
    const id = crypto.randomUUID();
    const channel: DataModel = { id, personId, type, value };

    database.set(id, channel);

    return id;
}
