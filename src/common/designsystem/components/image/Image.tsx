
import './Image.css';

type Props =
{
    readonly src: string;
};

export default function({ src }: Props)
{
    return <img src={src} />;
}
