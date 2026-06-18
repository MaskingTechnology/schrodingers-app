
export type DataModel =
{
    readonly _id: string;
    readonly code: string;
    readonly name: string;
    readonly description: string;
    readonly image: string;
};

export type ViewModel = Omit<DataModel, '_id'>;
