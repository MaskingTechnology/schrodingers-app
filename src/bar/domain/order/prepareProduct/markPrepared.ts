
import type { Data, Product } from '../definitions';

export default function markPrepared(data: Data, entryId: string): Product[]
{
    return data.products.map(product =>
    {
        const copy = { ...product };

        if (product.entryId === entryId)
        {
            copy.prepared = true;
        }

        return copy;
    });
}
