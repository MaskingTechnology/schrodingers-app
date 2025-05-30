
import { FormEvent } from 'react';

type Props =
{
    readonly onSubmit: (data: FormData) => void;
    readonly isSubmitting: boolean;
};

export default function ContactForm({ onSubmit, isSubmitting }: Props)
{
    const submit = (event: FormEvent) =>
    {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const data = new FormData(form);

        onSubmit(data);

        form.reset();
    };

    return <form className='contact-form' onSubmit={submit}>
        <input type='text' name='firstName' placeholder='First name' />
        <input type='text' name='lastName' placeholder='Last name' />
        <input type='phone' name='phone' placeholder='Phone number' />
        <input type='email' name='email' placeholder='Email address' />
        <input type='submit' value='Add contact' disabled={isSubmitting} />
    </form>;
}
