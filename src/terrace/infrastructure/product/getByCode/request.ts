
import { type Product } from '../../../domain/product';

import { URL } from './definitions';

export default async function request(code: string): Promise<Product>
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
