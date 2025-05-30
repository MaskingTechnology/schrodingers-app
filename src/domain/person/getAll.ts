
import type { DataModel } from './types';
import database from './database';

export default async function getAll(): Promise<DataModel[]>
{
    return [...database.values()];
}
