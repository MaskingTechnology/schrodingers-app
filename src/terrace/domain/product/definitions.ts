
export const COLLECTION = 'terrace.products';

export type Product =
{
    readonly code: string;
    readonly name: string;
    readonly price: number;
    readonly imageUrl: string;
};

export type Document = Product &
{
    readonly _id: string;
};
