
import type { ViewModel as ProductView } from '^/domain/product';

import ProductRow from './ProductRow';

type Props =
{
    readonly products: ProductView[];
    readonly onRemove: (index: number) => void;
};

export default function({ products, onRemove }: Props)
{
    return <div className='list'>
        {
            products.map((product, index) =>
                <ProductRow product={product} onRemove={() => onRemove(index)}></ProductRow>
            )
        }
    </div>;
}
