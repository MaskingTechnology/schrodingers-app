
import { List } from '@schrodinger/common/designsystem';

import type { ProductView } from '^/domain/order';

import ProductRow from './ProductRow';

type Props =
{
    readonly products: ProductView[];
    readonly onRemove: (entryId: string) => void;
};

export default function({ products, onRemove }: Props)
{
    if (products.length === 0)
    {
        return <span>(no products in order)</span>;
    }

    return <List>
        {
            products.map(product =>
                <ProductRow
                    product={product}
                    onRemove={() => onRemove(product.entryId)}
                    key={product.entryId}
                ></ProductRow>
            )
        }
    </List>;
}
