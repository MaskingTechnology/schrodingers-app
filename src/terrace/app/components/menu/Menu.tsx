
import ProductGrid from './components/ProductGrid';

import useProducts from './hooks/useProducts';

type Props =
{
    readonly onOrder: (code: string) => void;
};

export default function({ onOrder }: Props)
{
    const { products } = useProducts();

    return <ProductGrid products={products} onOrder={onOrder}></ProductGrid>;
}
