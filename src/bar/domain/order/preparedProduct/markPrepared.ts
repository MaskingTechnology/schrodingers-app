
import type { OrderData, Product } from '../types';

export default function markPrepared(data: OrderData, entryId: string): Product[]
{
    return data.products.map(product =>
    {
        const copy = {...product};

        if (product.entryId === entryId)
        {
            copy.prepared = true;
        }

        return copy;
    });
}
