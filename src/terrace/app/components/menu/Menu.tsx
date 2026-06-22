
import { ViewModel as ProductView } from '^/domain/product';

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
        return <span>(no products to order)</span>;
    }

    return <ProductGrid products={products} onOrder={onOrder}></ProductGrid>;
}
