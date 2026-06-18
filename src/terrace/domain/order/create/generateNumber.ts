
let number = 0;

export default function generateNumber(): string
{
    return String(++number).padStart(3, '0')
}
