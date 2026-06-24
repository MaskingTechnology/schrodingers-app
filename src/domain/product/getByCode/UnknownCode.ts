
export default class UnknownCode extends Error
{
    constructor(code: string)
    {
        super(`The product code '${code}' is unknown`);
    }
}
