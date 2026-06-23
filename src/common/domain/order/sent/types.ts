
export type EventData =
{
    readonly number: string;
    readonly tableNumber: string;
    readonly products:
    {
        readonly code: string;
        readonly name: string;
        readonly price: number;
    }[];
};
