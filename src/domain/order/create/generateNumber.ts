
let number = 0;

export default function (): string
{
    return String(++number).padStart(3, '0');
}
