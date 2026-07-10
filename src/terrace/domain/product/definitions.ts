
export const COLLECTION = 'terrace.products';

export type Data =
{
    readonly _id: string;
    readonly code: string;
    readonly name: string;
    readonly price: number;
    readonly imageUrl: string;
};

export type Product = Omit<Data, '_id'>;
