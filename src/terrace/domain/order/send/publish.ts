
import { eventBroker } from '@schrodinger/common/integrations';

import { TOPIC } from '../definitions';

import type { ViewModel } from '../types';

export const EVENT = '';

export default async function(view: ViewModel): Promise<void>
{
    eventBroker.publish<ViewModel>({ topic: TOPIC, event: EVENT, data: view });
}
