
import { Button } from '@schrodinger/common/designsystem';

type Props =
{
    readonly disabled: boolean;
    readonly onSend: () => void;
};

export default function({ disabled, onSend }: Props)
{
    return <Button type='primary' disabled={disabled} onClick={onSend}>Send order</Button>;
}
