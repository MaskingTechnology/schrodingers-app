
import type { Data, Product } from '../definitions';

export default function run(data: Data): Product
{
    const { _id: $, ...view } = data;

    return view;
}
