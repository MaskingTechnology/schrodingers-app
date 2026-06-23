
import { Row, Text } from '@schrodinger/common/designsystem';

import { toCurrency } from '@schrodinger/common/utilities';

type Props =
{
    readonly amount: number;
};

export default function({ amount }: Props)
{
    return <Row>
        <Text weight='bold'>Total</Text>
        <Text weight='bold'>{toCurrency(amount)}</Text>
    </Row>;
}
