
import { ReactNode } from 'react';

import './Row.css';

type Props =
{
    readonly children: ReactNode;
};

export default function({ children }: Props)
{
    return <div className='row'>{children}</div>;
}
