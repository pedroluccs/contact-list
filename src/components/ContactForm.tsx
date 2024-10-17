import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../features/contactsSlice';
import styled from 'styled-components';
import { Contact } from '../features/contactsSlice';
import { AppDispatch } from '../store';

const FormContainer = styled.div`
display: flex;
flex-direction: column;
max-width: 100vh;
margin: 20px auto;
padding: 20px;
border: 1px solid #ccc;
border-radius: 8px;
font-size: 20px;
height: 20vh;
font-family: Roboto, sans-serif;
text-align: center

@media (max-width: 768px) {
display: flex;
justify-content: center
text-align: center;
font-size: 8px
max-width: 80%;
margin: 0 auto;
position: absolute;
}
`;

const Input = styled.input`
margin-bottom: 10px;
padding: 10px;
border-radius: 4px;
border: 1px solid #ccc;
font-size: 15px;
font-family: Roboto, sans-serif;
margin-right: 12px;

@media (max-width: 768px) {
font-size: 10px;
padding: 5px;

}
`;

const Button = styled.button`
padding: 10px;
background-color: #007bff;
color: #fff;
border: none;
border-radius: 4px;
cursor: pointer;
margin-left: 10px;
font-family: Roboto, sans-serif;
font-size: 20px;

@media (max-width: 768px) {
font-size: 10px;
padding: 5px;
`;

export const ButtonRemove = styled.button`
padding: 10px;
background-color: red;
color: #fff;
border: none;
border-radius: 4px;
cursor: pointer;
margin-left: 10px;
font-family: Roboto, sans-serif;
font-size: 20px;

@media (max-width: 768px) {
font-size: 10px;
padding: 5px;
`;

export const ButtonEdit = styled.button`
padding: 10px;
background-color: #5ce65c;
color: #fff;
border: none;
border-radius: 4px;
cursor: pointer;
margin-left: 10px;
font-family: Roboto, sans-serif;
font-size: 20px;

@media (max-width: 768px) {
font-size: 10px;
padding: 5px;
`;

interface ContactFormProps {
    currentContact: Contact | null;
    clearForm: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ currentContact, clearForm }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (currentContact) {
            setName(currentContact.name);
            setEmail(currentContact.email);
            setPhone(currentContact.phone);
        }
    }, [currentContact]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (currentContact) {
            dispatch(editContact({ id: currentContact.id, name, email, phone}));
            clearForm();
        } else {
            dispatch(addContact({ id: Date.now(), name, email, phone}))
        }
        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <FormContainer>
            <h3>{currentContact ? 'Editar Contato' : 'Adicionar Contato'}</h3>
            <form onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Nome Completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <Input
                type="tel"
                placeholder="Telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <Button type="submit">{currentContact ? 'Salvar' : 'Adicionar'}</Button>
          </form>
        </FormContainer>
        );
};

export default ContactForm;