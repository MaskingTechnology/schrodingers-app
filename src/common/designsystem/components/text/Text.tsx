
import { ReactNode } from 'react';

import './Text.css';

type Props =
{
    readonly children: ReactNode;
    readonly type?: 'primary' | 'secondary';
    readonly weight?: 'normal' | 'bold';
};

export default function({ children, type = 'primary', weight = 'normal' }: Props)
{
    const className = 'text ' + type + ' ' + weight;

    return <span className={className}>{children}</span>;
}
