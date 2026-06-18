
export default class UnknownNumber extends Error
{
    constructor(number: string)
    {
        super(`The order number '${number}' is unknown`);
    }
}
