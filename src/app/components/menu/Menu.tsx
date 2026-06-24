
import { Text } from '~/designsystem';

import type { ProductView } from '^/domain/product';

import ProductGrid from './components/ProductGrid';

type Props =
{
    readonly products: ProductView[];
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
