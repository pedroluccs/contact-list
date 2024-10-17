import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import styled from 'styled-components';
import { RootState } from '../store';
import { Contact } from '../features/contactsSlice';

const ListContainer = styled.div`
  margin: 20px auto;
  max-width: 100vh;
  font-size: 20px;
  font-family: Roboto, sans-serif;
  text-align: center;

  @media (max-width: 768px) {
font-size: 15px;
`;

interface ContactListProps {
  setCurrentContact: (contact: Contact | null) => void;
}

const ContactList: React.FC<ContactListProps> = ({ setCurrentContact }) => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  return (
    <ListContainer>
      {contacts.length === 0 ? (
        <p>Nenhum contato adicionado</p>
      ) : (
        contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            setCurrentContact={setCurrentContact}
          />
        ))
      )}
    </ListContainer>
  );
};

export default ContactList;
