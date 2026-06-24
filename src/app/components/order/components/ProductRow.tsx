
import { Row, Text, Button } from '~/designsystem';

import { toCurrency } from '^/utilities';

import type { ProductView } from '^/domain/order';

type Props =
{
    readonly product: ProductView;
    readonly onRemove: () => void;
};

export default function({ product, onRemove }: Props)
{
    return <Row>
        <Text>{product.name} ({toCurrency(product.price)})</Text>
        <Button type='secondary' onClick={onRemove}>✘</Button>
    </Row>;
}
