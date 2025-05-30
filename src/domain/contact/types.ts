
import { DataModel as PersonDataModel } from '../person/types';
import { DataModel as ChannelDataModel } from '../channel/types';

export type AggregationModel =
{
    person: PersonDataModel;
    channels: ChannelDataModel[];
};
