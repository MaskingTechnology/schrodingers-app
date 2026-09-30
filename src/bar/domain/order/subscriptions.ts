
import { subscribe as onOrderSent } from '@schrodinger/common/domain/order/sent';

import create from './create';

export default async function subscribe(): Promise<void>
{
    return onOrderSent(create);
}

await subscribe();
