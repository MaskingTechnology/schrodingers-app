
import { Button } from '@schrodinger/common/designsystem';

type Props =
{
    readonly onClose: () => void;
};

export default function({ onClose }: Props)
{
    return <Button type='primary' onClick={onClose}>Close order</Button>;
}
