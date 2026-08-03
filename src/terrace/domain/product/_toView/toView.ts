
import type { ProductData, ProductView } from '../types';

export default function toView(data: ProductData): ProductView
{
    const { _id: $, ...view } = data;

    return view;
}
