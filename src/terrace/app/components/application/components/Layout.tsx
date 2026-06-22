
import { ReactNode } from 'react';

import './Layout.css';

type Props =
{
    readonly header: ReactNode;
    readonly main: ReactNode;
    readonly aside: ReactNode;
};

export default function({header, main, aside}: Props)
{
    return <div className='layout'>
        <header className='row'>{header}</header>
        <main>{main}</main>
        <aside>{aside}</aside>
    </div>;
}
