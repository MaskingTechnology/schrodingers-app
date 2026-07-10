
import type { Data } from '../definitions';

type ModelData = Omit<Data, '_id' | 'products'>;

export default function extractModelData(data: Data): ModelData
{
    const { _id: $0, products: $1, ...modelData } = data;

    return modelData;
}
