
import { subscribe as subscribeToOrderSent } from '@schrodinger/common/domain/order/sent';

import create from './create';

export default async function subscribe(): Promise<void>
{
    return subscribeToOrderSent(create);
}

subscribe();
