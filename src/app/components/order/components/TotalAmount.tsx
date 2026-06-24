
import { Row, Text } from '~/designsystem';

import { toCurrency } from '^/utilities';

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
