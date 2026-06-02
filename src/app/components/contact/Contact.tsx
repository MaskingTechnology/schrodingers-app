
import type { AggregationModel } from '../../../domain/contact/types';

import ChannelList from '../channel/List';
import Person from '../person/Person';

type Props =
{
    readonly contact: AggregationModel;
};

export default function Contact({ contact }: Props)
{
    return <div className='contact'>
        <Person person={contact.person} />
        <ChannelList channels={contact.channels} />
    </div>;
}
