
import { eventBroker } from '^/integrations';

import { TOPIC } from '../definitions';

import { EVENT } from './definitions';
import type { EventData } from './types';

export default async function subscribe(handler: (data: EventData) => void): Promise<void>
{
    return eventBroker.subscribe<EventData>({ topic: TOPIC, event: EVENT, handler });
}
