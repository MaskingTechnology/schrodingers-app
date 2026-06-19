
export default class NoProduct extends Error
{
    constructor(orderNumber: string, productIndex: number)
    {
        super(`The order '${orderNumber}' does not contain a product on index '${productIndex}'`);
    }
}
