import React, { useEffect, useState } from "react";
import ContactForm from "../components/ContactForm";
import ContactCard from "../components/ContactCard";

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
}

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState<Contact[]>([]);
  useEffect(() => {
    if(search.length > 10) {
      setSearch("Maximum limit reached");
    }else{
      setSearch("");
    }
  }, []);

  const handleFormSubmit = (data: Contact) => {
    setContacts(prev => [...prev,data]);
  };

  const handleDeleteContact = (id: string) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };
  
  return (
    <div className="container mx-auto px-4">      
      <ContactForm onSubmit={(data) => handleFormSubmit({...data, id: Math.random().toString()})} />

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Submitted Contacts</h2>
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            name={contact.name}
            email={contact.email}
            message={contact.message}
            onDelete={() => handleDeleteContact(contact.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
