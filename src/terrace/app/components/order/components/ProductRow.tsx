
import { Row, Text, Button } from '@schrodinger/common/designsystem';

import { toCurrency } from '@schrodinger/common/utilities';

import type { Product } from '^/domain/order';

type Props =
{
    readonly product: Product;
    readonly onRemove: () => void;
};

export default function({ product, onRemove }: Props)
{
    return <Row>
        <Text>{product.quantity}x {product.name} ({toCurrency(product.price)})</Text>
        <Button type='secondary' onClick={onRemove}>✘</Button>
    </Row>;
}
