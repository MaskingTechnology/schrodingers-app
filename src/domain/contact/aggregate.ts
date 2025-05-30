
import type { AggregationModel } from './types';
import type {DataModel as PersonDataModel } from '../person/types';
import getChannel from '../channel/getByPerson';

export default async function aggregate(person: PersonDataModel): Promise<AggregationModel>
{
    const channels = await getChannel(person.id);

    return { person, channels };
}
