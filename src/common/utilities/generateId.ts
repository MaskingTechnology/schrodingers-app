
export function generateId(): string
{
    return String(Math.round(Math.random() * 1000000));
}
