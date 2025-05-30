
import { useCallback, useEffect, useState } from 'react';

import type { AggregationModel } from '../../domain/contact/types';
import getAllContacts from '../../domain/contact/getAll';

export default function useGetAllContacts(): [AggregationModel[], boolean, () => void]
{
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [contacts, setContacts] = useState<AggregationModel[]>([]);

    const loadContacts = useCallback(() =>
    {
        let cancelled = false;

        const load = async () =>
        {
            setIsLoading(true);

            const contacts = await getAllContacts();

            if (cancelled) return;

            setContacts(contacts);
            setIsLoading(false);
        }

        const cancel = () =>
        {
            cancelled = true;
        }

        load();

        return cancel;

    }, []);

    useEffect(loadContacts, [loadContacts]);

    return [contacts, isLoading, loadContacts];
}
