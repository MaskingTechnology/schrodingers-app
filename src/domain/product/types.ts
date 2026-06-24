
export type ProductData =
{
    readonly _id: string;
    readonly code: string;
    readonly name: string;
    readonly price: number;
    readonly imageUrl: string;
};

export type ProductView = Omit<ProductData, '_id'>;
