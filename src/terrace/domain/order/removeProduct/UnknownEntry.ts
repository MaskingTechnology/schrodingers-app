
export default class UnknownEntry extends Error
{
    constructor(orderNumber: string, entryId: string)
    {
        super(`The entry id '${entryId}' for order '${orderNumber}' is unknown`);
    }
}
