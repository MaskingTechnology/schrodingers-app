
export default class ProductNotFound extends Error
{
    constructor(orderNumber: string, productCode: string)
    {
        super(`The order '${orderNumber}' does not contain product ${productCode}`);
    }
}
