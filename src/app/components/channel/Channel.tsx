
import type { DataModel } from '../../domain/channel/types';

type Props =
{
    readonly channel: DataModel;
};

export default function Channel({ channel }: Props)
{
    const fullInfo = `${channel.type}: ${channel.value}`;

    return <div className='channel'>{ fullInfo }</div>;
}
