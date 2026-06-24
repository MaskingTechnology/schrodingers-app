
import type { ReactNode } from 'react';

import './Card.css';

type Props =
{
    readonly children: ReactNode;
};

export default function({ children }: Props)
{
    return <div className='card'>{children}</div>;
}
