
import { List } from '@schrodinger/common/designsystem';

import type { ViewModel as ProductView } from '^/domain/product';

import ProductRow from './ProductRow';

type Props =
{
    readonly products: ProductView[];
    readonly onRemove: (productIndex: number) => void;
};

export default function({ products, onRemove }: Props)
{
    if (products.length === 0)
    {
        return <span>(no products in order)</span>;
    }

    return <List>
        {
            products.map((product, index) =>
                <ProductRow
                    product={product}
                    onRemove={() => onRemove(index)}
                    key={product.code + '@' + index}
                ></ProductRow>
            )
        }
    </List>;
}
