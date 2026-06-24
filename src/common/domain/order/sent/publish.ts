
import { eventBroker } from '^/integrations';

import { TOPIC } from '../definitions';

import { EVENT } from './definitions';
import type { EventData } from './types';

export default async function publish(data: EventData): Promise<void>
{
    return eventBroker.publish<EventData>({ topic: TOPIC, event: EVENT, data });
}
