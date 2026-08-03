
import { List, Text } from '@schrodinger/common/designsystem';

import type { Product } from '^/domain/order';

import ProductRow from './ProductRow';

type Props =
{
    readonly products: Product[];
    readonly onPrepared: (entryId: string) => void;
};

export default function({ products, onPrepared }: Props)
{
    if (products.length === 0)
    {
        return <Text type='secondary'>Order is ready to be served.</Text>;
    }

    return <List>
        {
            products.map(product =>
                <ProductRow
                    product={product}
                    onPrepared={() => onPrepared(product.entryId)}
                    key={product.entryId}
                ></ProductRow>
            )
        }
    </List>;
}
