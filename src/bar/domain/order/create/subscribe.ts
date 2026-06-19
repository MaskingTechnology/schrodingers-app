
import { eventBroker } from '@schrodinger/common/integrations';

import { TOPIC, ViewModel } from '@schrodinger/terrace/domain/order';
import { EVENT } from '@schrodinger/terrace/domain/order/send';

import create from './create';

export default async function subscribe(): Promise<void>
{
    eventBroker.subscribe<ViewModel>({ topic: TOPIC, event: EVENT, handler: create });
}

subscribe();
