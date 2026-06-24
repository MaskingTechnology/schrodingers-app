
import { Row, Title, Button } from '@schrodinger/common/designsystem';

type Props =
{
    readonly onRefresh: () => void;
};

export default function({ onRefresh }: Props)
{
    return <Row>
        <Title>Schrödinger's Bar</Title>
        <Button type='secondary' onClick={onRefresh}>Refresh</Button>
    </Row>;
}
