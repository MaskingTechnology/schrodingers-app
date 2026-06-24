
import type { ReactNode } from 'react';

import './Layout.css';

type Props =
{
    readonly header: ReactNode;
    readonly main: ReactNode;
};

export default function({header, main}: Props)
{
    return <div className='layout'>
        <header>{header}</header>
        <main>{main}</main>
    </div>;
}
