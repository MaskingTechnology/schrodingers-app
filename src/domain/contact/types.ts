
import { DataModel as PersonDataModel } from '../person/types';
import { DataModel as ChannelDataModel } from '../channel/types';

export type AggregationModel =
{
    readonly person: PersonDataModel;
    readonly channels: ChannelDataModel[];
};
