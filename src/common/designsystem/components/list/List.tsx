
import { ReactNode } from 'react';

import './List.css';

type Props =
{
    readonly children: ReactNode;
};

export default function({ children }: Props)
{
    return <div className='list'>{children}</div>;
}
