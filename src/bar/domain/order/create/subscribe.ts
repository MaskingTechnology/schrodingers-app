
import { TOPIC, EVENTS, SentEvent } from '@schrodinger/common/domain/order';
import { eventBroker } from '@schrodinger/common/integrations';

import create from './create';

export default async function subscribe(): Promise<void>
{
    eventBroker.subscribe<SentEvent>({ topic: TOPIC, event: EVENTS.SENT, handler: create });
}

subscribe();
