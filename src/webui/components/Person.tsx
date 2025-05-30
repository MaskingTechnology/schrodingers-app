
import type { DataModel } from '../../domain/person/types';

type Props =
{
    readonly person: DataModel;
};

export default function Person({ person }: Props)
{
    const fullName = `${person.firstName} ${person.lastName}`;

    return <div className='person'>{ fullName }</div>;
}
