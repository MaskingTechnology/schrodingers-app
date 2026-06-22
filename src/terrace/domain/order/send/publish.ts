
import { TOPIC, EVENTS, type SentEvent } from '@schrodinger/common/domain/order';
import { eventBroker } from '@schrodinger/common/integrations';

export default async function publish(data: SentEvent): Promise<void>
{
    eventBroker.publish<SentEvent>({ topic: TOPIC, event: EVENTS.SENT, data });
}
