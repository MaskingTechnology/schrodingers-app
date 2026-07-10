
import { Text } from '@schrodinger/common/designsystem';

import type { Product } from '^/domain/product';

import ProductGrid from './components/ProductGrid';

type Props =
{
    readonly products: Product[];
    readonly onOrder: (productCode: string) => void;
};

export default function({ products, onOrder }: Props)
{
    if (products.length === 0)
    {
        return <Text type='secondary'>(no products to order)</Text>;
    }

    return <ProductGrid products={products} onOrder={onOrder}></ProductGrid>;
}
