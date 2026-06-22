
import { List } from '@schrodinger/common/designsystem';

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
        return <span>Order is ready to be served.</span>
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
