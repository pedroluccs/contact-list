import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '../features/contactsSlice';
import styled from 'styled-components';
import { Contact } from '../features/contactsSlice';
import { AppDispatch } from '../store';
import { ButtonEdit, ButtonRemove } from './ContactForm';

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  font-size: 20px;

  @media (max-width: 768px) {
font-size: 12px;
`;

interface ContactItemProps {
  contact: Contact;
  setCurrentContact: (contact: Contact | null) => void;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, setCurrentContact }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleRemove = () => {
    dispatch(removeContact(contact.id));
  };

  return (
    <ItemContainer>
      <div>
        <h4>{contact.name}</h4>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </div>
      <div>
        <ButtonEdit onClick={() => setCurrentContact(contact)}>Editar</ButtonEdit>
        <ButtonRemove onClick={handleRemove}>Remover</ButtonRemove>
      </div>
    </ItemContainer>
  );
};

export default ContactItem;
