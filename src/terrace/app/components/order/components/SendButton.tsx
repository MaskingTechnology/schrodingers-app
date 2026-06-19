
type Props =
{
    readonly onSend: () => void;
};

export default function({ onSend }: Props)
{
    return <button onClick={onSend}>Send order</button>;
}
