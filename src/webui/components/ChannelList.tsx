
import type { DataModel } from '../../domain/channel/types';

import Channel from './Channel';

type Props =
{
    readonly channels: DataModel[];
};

export default function ChannelList({ channels }: Props)
{
    return <div className='channel-list'>
        { channels.map(channel => <Channel channel={channel} key={channel.id} />) }
    </div>;
}
