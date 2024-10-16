import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { Contact } from './features/contactsSlice';

const App: React.FC = () => {
  const [currentContact, setCurrentContact] = useState<Contact | null>(null);

  const clearForm = () => setCurrentContact(null);

  return (
    <div className="App">
      <ContactForm currentContact={currentContact} clearForm={clearForm} />
      <ContactList setCurrentContact={setCurrentContact} />
    </div>
  );
};

export default App;
