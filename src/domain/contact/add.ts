
import createPerson from '../person/create';
import removePerson from '../person/remove';
import createChanel from '../channel/create';

export default async function add(firstName: string, lastName: string, phone: string, email: string): Promise<void>
{
    let personId: string | undefined = undefined;

    try
    {
        personId = await createPerson(firstName, lastName);

        await Promise.all([
            createChanel(personId, 'phone', phone),
            createChanel(personId, 'email', email)
        ]);

        console.log(`Contact added with ID: ${personId}`);
    }
    catch (error)
    {
        console.error('Error adding contact:', error);

        // Fail fast: only remove the person if it was created.
        // If one of the channels has been created, we'll remove them manually.
        
        if (personId) await removePerson(personId);

        throw error;
    }
}
