
import { ReactNode } from 'react';

import './Button.css';

type Props =
{
    readonly children: ReactNode;
    readonly disabled?: boolean;
    readonly onClick: () => void;
    readonly type?: 'primary' | 'secondary';
};

const doNothing = () => {};

export default function({ children, onClick, disabled = false, type = 'primary' }: Props)
{
    const clickHandler = disabled ? doNothing : onClick;
    const className = 'button ' + type + (disabled ? ' disabled' : '');

    return <div className={className} onClick={clickHandler}>{children}</div>;
}
