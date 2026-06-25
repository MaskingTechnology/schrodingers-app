
import type { OrderView } from '../../../domain/order';

import { URL } from './definitions';

export default async function request(tableNumber: string): Promise<OrderView | undefined>
{
    const response = await fetch(`${URL}?tableNumber=${tableNumber}`,
    {
        method: 'GET'
    });

    if (response.status === 404)
    {
        return undefined;
    }

    if (response.status >= 300)
    {
        const message = await response.text();

        throw new Error(message);
    }

    return response.json();
}
