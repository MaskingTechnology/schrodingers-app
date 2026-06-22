
import { Row, Button } from '@schrodinger/common/designsystem';

import type { Product } from '^/domain/order';

type Props =
{
    readonly product: Product;
    readonly onPrepared: () => void;
};

export default function({ product, onPrepared }: Props)
{
    return <Row>
        <span>{product.name}</span>
        <Button type='secondary' onClick={onPrepared}>✔</Button>
    </Row>;
}
