
import database from './database';

export default async function remove(id: string): Promise<void>
{
    database.delete(id);
}
