
import { List, Text } from '@schrodinger/common/designsystem';

import type { Product } from '^/domain/order';

import ProductRow from './ProductRow';

type Props =
{
    readonly products: Product[];
    readonly onRemove: (entryId: string) => void;
};

export default function({ products, onRemove }: Props)
{
    if (products.length === 0)
    {
        return <Text type='secondary'>(no products in order)</Text>;
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
