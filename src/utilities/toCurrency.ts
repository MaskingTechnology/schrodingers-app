
export function toCurrency(amount: number): string
{
    return amount.toLocaleString(undefined, { style: 'currency', currency: 'EUR' });
}
