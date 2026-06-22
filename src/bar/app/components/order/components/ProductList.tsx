
import { List } from '@schrodinger/common/designsystem';

import type { Product as ProductView } from '^/domain/order';

import ProductRow from './ProductRow';

type Props =
{
    readonly products: ProductView[];
    readonly onPrepared: (productIndex: number) => void;
};

export default function({ products, onPrepared }: Props)
{
    if (products.length === 0)
    {
        return <span>Order is ready to be served.</span>
    }

    return <List>
        {
            products.map((product, index) =>
                <ProductRow
                    product={product}
                    onPrepared={() => onPrepared(index)}
                    key={product.code + '@' + index}
                ></ProductRow>
            )
        }
    </List>;
}
