
import type { ReactNode } from 'react';

import './Column.css';

type Props =
{
    readonly children: ReactNode;
};

export default function({ children }: Props)
{
    return <div className='column'>{children}</div>;
}
