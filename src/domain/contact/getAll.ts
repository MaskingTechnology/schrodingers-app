
import type { AggregationModel } from './types';
import aggregate from './aggregate';
import getAllPersons from '../person/getAll';

export default async function getAll(): Promise<AggregationModel[]>
{
    const persons = await getAllPersons();

    return Promise.all(persons.map(aggregate));
}
