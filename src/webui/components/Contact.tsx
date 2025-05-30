
import type { AggregationModel } from '../../domain/contact/types';

import Person from './Person';
import ChannelList from './ChannelList';

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
