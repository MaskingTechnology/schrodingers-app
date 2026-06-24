
import type { ReactNode } from 'react';

import './Grid.css';

type Props =
{
    readonly children: ReactNode;
};

export default function({ children }: Props)
{
    return <div className='grid'>{children}</div>;
}
