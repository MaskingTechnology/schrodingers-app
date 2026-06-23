
import { Row, Title } from '@schrodinger/common/designsystem';

type Props =
{
    readonly tableNumber: string;
};

export default function({ tableNumber }: Props)
{
    return <Row>
        <Title>Schrödinger's Terrace</Title>
        <Title type='sub'>Table {tableNumber}</Title>
    </Row>;
}
