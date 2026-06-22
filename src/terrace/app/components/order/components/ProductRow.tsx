
import { Row, Button } from '@schrodinger/common/designsystem';

import { toCurrency } from '@schrodinger/common/utilities';

import type { ViewModel as ProductView } from '^/domain/product';

type Props =
{
    readonly product: ProductView;
    readonly onRemove: () => void;
};

export default function({ product, onRemove }: Props)
{
    return <Row>
        <span>{product.name} ({toCurrency(product.price)})</span>
        <Button type='secondary' onClick={onRemove}>✘</Button>
    </Row>;
}
