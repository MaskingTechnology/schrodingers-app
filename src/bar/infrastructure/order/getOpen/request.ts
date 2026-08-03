
import type { OrderView } from '../../../domain/order';

import { URL } from './definitions';

export default async function request(): Promise<OrderView[]>
{
    const response = await fetch(URL,
    {
        method: 'GET'
    });

    if (response.status >= 300)
    {
        const message = await response.text();

        throw new Error(message);
    }

    return response.json();
}
