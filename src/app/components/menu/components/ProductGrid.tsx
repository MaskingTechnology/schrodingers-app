
import { Grid } from '~/designsystem';

import type { ProductView } from '^/domain/product';

import ProductCard from './ProductCard';

type Props =
{
    readonly products: ProductView[];
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
