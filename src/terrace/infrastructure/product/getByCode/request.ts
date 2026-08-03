
import type { ProductView } from '../../../domain/product';

import { URL } from './definitions';

export default async function request(code: string): Promise<ProductView>
{
    const response = await fetch(`${URL}?code=${code}`,
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
