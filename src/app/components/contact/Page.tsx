
import ContactList from './List';
import ContactForm from './Form';

import useGetAllContacts from './hooks/useGetAllContacts';
import useAddContact from './hooks/useAddContact';

export default function Page()
{
    const [contacts, isLoading, updateContacts] = useGetAllContacts();
    const [addContact, isAdding] = useAddContact(updateContacts);

    return <>
        <ContactForm onSubmit={addContact} isSubmitting={isAdding} />
        <ContactList contacts={contacts} isLoading={isLoading} />
    </>;
}
