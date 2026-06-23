
import { ReactNode } from 'react';

import './Title.css';

type Props =
{
    readonly children: ReactNode;
    readonly type?: 'main' | 'sub';
};

export default function({ children, type = 'main' }: Props)
{
    return type === 'main'
        ? <h1 className='title'>{children}</h1>
        : <h2 className='title'>{children}</h2>;
}
