
import type { DataModel, ViewModel } from '../types';

export default function toView(data: DataModel): ViewModel
{
    const { _id: _, ...view } = data;

    return view;
}
