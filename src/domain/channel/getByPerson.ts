
import type { DataModel } from './types';
import database from './database';

export default async function getByPerson(personId: string): Promise<DataModel[]>
{
    const channels: DataModel[] = [];

    for (const channel of database.values())
    {
        if (channel.personId === personId)
        {
            channels.push(channel);
        }
    }

    return channels;
}
