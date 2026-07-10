
import { Grid } from '@schrodinger/common/designsystem';

import type { Product } from '^/domain/product';

import ProductCard from './ProductCard';

type Props =
{
    readonly products: Product[];
    readonly onOrder: (productCode: string) => void;
};

export default function({ products, onOrder }: Props)
{
    return <Grid>
        {
            products.map(product =>
                <ProductCard
                    product={product}
                    onOrder={onOrder}
                    key={product.code}
                ></ProductCard>
            )
        }
    </Grid>;
}
