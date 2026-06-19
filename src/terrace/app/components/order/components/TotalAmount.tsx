
type Props =
{
    readonly amount: number;
};

export default function({ amount }: Props)
{
    return <div className='row'>
        <strong>Total</strong>
        <strong>{amount}</strong>
    </div>;
}
