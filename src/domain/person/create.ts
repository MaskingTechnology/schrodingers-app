
import type { DataModel } from './types';
import database from './database';

export default async function create(firstName: string, lastName: string): Promise<string>
{
    const id = crypto.randomUUID();
    const person: DataModel = { id, firstName, lastName };

    database.set(id, person);

    return id;
}
