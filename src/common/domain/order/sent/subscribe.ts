
import { eventBroker } from '^/integrations';

import { TOPIC } from '../definitions';

import { EVENT, type Event } from './definitions';

export default async function subscribe(handler: (data: Event) => void): Promise<void>
{
    return eventBroker.subscribe<Event>({ topic: TOPIC, event: EVENT, handler });
}
