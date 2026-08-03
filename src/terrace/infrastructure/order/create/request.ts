
import type { OrderView } from '../../../domain/order';

import { URL } from './definitions';

export default async function request(tableNumber: string): Promise<OrderView>
{
    const response = await fetch(URL,
    {
        method: 'POST',
        body: JSON.stringify({ tableNumber }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.status >= 300)
    {
        const message = await response.text();

        throw new Error(message);
    }

    return response.json();
}
