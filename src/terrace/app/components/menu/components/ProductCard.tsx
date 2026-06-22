
import { Card, Row, Button } from '@schrodinger/common/designsystem';

import { toCurrency } from '@schrodinger/common/utilities';

import type { ProductView } from '^/domain/product';

type Props =
{
    readonly product: ProductView;
    readonly onOrder: (productCode: string) => void;
};

export default function({ product, onOrder }: Props)
{
    return <Card>
        <header>
            {product.name}
        </header>
        <main>
            <img src={product.imageUrl} />
        </main>
        <footer>
            <Row>
                <strong>{toCurrency(product.price)}</strong>
                <Button type='primary' onClick={() => onOrder(product.code)}>Add to order</Button>
            </Row>
        </footer>
    </Card>;
}
