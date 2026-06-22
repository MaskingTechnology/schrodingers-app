
import { Row } from '@schrodinger/common/designsystem';

import { toCurrency } from '@schrodinger/common/utilities';

type Props =
{
    readonly amount: number;
};

export default function({ amount }: Props)
{
    return <Row>
        <strong>Total</strong>
        <strong>{toCurrency(amount)}</strong>
    </Row>;
}
