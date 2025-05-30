
import type { AggregationModel } from '../../domain/contact/types';

import Contact from './Contact';

type Props =
{
    readonly contacts: AggregationModel[];
    readonly isLoading: boolean;
};

export default function ContactList({ contacts, isLoading }: Props)
{
    if (isLoading)
    {
        return <div className='contact-list'>Loading contacts...</div>
    }
    
    if (contacts.length === 0)
    {
        return <div className='contact-list'>No contacts yet.</div>
    }

    return <div className='contact-list'>
        { contacts.map(contact => <Contact contact={contact} key={contact.person.id} />) }
    </div>;
}
