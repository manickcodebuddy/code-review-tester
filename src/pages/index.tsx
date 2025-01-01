import React, { useEffect, useState } from "react";
import ContactForm from "../components/ContactForm";
import ContactCard from "../components/ContactCard";

interface Contact {
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
    }
  }, []);

  const handleFormSubmit = (data: Contact) => {
    setContacts(prev => [...prev, data]);
  };
  
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">This is Code review tester app</h1>
      <p>This is a subtitle</p>
      <ul className="mb-4">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
      <input 
        type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded mb-4" 
      />
      
      <ContactForm onSubmit={handleFormSubmit} />

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Submitted Contacts</h2>
        {contacts.map((contact, index) => (
          <ContactCard
            key={index}
            name={contact.name}
            email={contact.email}
            message={contact.message}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
