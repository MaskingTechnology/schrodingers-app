
import type { ViewModel as ProductView } from '^/domain/product';

import ProductCard from './ProductCard';

type Props =
{
    readonly products: ProductView[];
    readonly onOrder: (code: string) => void;
};

export default function({ products, onOrder }: Props)
{
    return <div className='grid'>
        { products.map(product => <ProductCard product={product} onOrder={onOrder}></ProductCard>) }
    </div>;
}
