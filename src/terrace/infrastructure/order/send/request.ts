
import { type Order } from '../../../domain/order';

import { URL } from './definitions';

export default async function request(number: string): Promise<Order>
{
    const response = await fetch(URL,
    {
        method: 'POST',
        body: JSON.stringify({ number }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.status >= 300)
    {
        const message = await response.text();

        throw new Error(message);
    }

    return response.json();
}
