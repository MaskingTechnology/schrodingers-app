
import { subscribe as subscribeToEvent } from '@schrodinger/common/domain/order/sent';

import create from './create';

export default async function subscribe(): Promise<void>
{
    return subscribeToEvent(create);
}

subscribe();
