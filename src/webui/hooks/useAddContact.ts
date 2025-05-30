
import { useCallback, useState } from 'react';

import addContact from '../../domain/contact/add';

export default function useAddContact(onAdded: () => void): [(data: FormData) => void, boolean]
{
    const [isAdding, setIsAdding] = useState<boolean>(false);

    const action = useCallback(async (data: FormData) =>
    {
        setIsAdding(true);

        const firstName = data.get('firstName') as string;
        const lastName = data.get('lastName') as string;
        const phone = data.get('phone') as string;
        const email = data.get('email') as string;

        await addContact(firstName, lastName, phone, email);

        onAdded();
        
        setIsAdding(false);

    }, []);

    return [action, isAdding];
}
