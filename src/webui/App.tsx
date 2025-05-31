
import './App.css';

import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

import useGetAllContacts from './hooks/useGetAllContacts';
import useAddContact from './hooks/useAddContact';

export default function App()
{
    const [contacts, isLoading, updateContacts] = useGetAllContacts();
    const [addContact, isAdding] = useAddContact(updateContacts);

    return <>
        <ContactForm onSubmit={addContact} isSubmitting={isAdding} />
        <ContactList contacts={contacts} isLoading={isLoading} />
    </>;
}
