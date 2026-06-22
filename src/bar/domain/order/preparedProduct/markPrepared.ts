
import { Product } from '../types';

export default function mapPrepared(products: Product[], preparedIndex: number): Product[]
{
    return products.map((product, index) =>
    {
        const copy = {...product};

        if (index === preparedIndex)
        {
            copy.prepared = true;
        }

        return copy;
    });
}
