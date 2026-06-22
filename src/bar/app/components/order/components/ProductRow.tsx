
import { Row, Button } from '@schrodinger/common/designsystem';

import type { Product as ProductView } from '^/domain/order';

type Props =
{
    readonly product: ProductView;
    readonly onPrepared: () => void;
};

export default function({ product, onPrepared }: Props)
{
    return <Row>
        <span>{product.name}</span>
        <Button type='secondary' onClick={onPrepared}>✔</Button>
    </Row>;
}
