import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const ContactForm = () => {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const {name, email, message} = formState;

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            if (validateEmail(e.target.value)) {
                setErrorMessage('');
            } else {
                setErrorMessage('Your email is invalid.');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value});
        }
    };

    const submitData = (e) => {
        e.preventDefault();
        console.log(formState);
    };

    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={submitData}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />
                </div>
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default ContactForm;