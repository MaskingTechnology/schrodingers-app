
import { eventBroker } from '^/integrations';

import { TOPIC } from '../definitions';

import { EVENT, type Event } from './definitions';

export default async function (data: Event): Promise<void>
{
    return eventBroker.publish<Event>({ topic: TOPIC, event: EVENT, data });
}
