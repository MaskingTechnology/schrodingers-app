
export type DataModel =
{
    readonly _id: string;
    readonly code: string;
    readonly name: string;
    readonly price: number;
    readonly imageUrl: string;
};

export type ViewModel = Omit<DataModel, '_id'>;
