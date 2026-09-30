
import { type Document, type Product } from '../definitions';

export default function (document: Document, entryId: string): Product[]
{
    return document.products.map(product =>
    {
        const copy = { ...product };

        if (product.entryId === entryId)
        {
            copy.prepared = true;
        }

        return copy;
    });
}
