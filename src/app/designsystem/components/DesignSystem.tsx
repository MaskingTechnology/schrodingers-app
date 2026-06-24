
import type { ReactNode } from 'react';

import './DesignSystem.css';

type Props =
{
    readonly children: ReactNode;
};

export default function({ children }: Props)
{
    return <div className='designsystem'>{children}</div>;
}
