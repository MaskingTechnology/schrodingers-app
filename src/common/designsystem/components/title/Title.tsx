
import { ReactNode } from 'react';

import './Title.css';

type Props =
{
    readonly children: ReactNode;
};

export default function({ children }: Props)
{
    return <h1>{children}</h1>;
}
