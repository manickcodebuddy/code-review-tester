import React from 'react';

interface ContactCardProps {
  name: string;
  email: string;
  message: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ name, email, message }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-sm">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">{email}</p>
      <p className="text-gray-800">{message}</p>
    </div>
  );
};

export default ContactCard; 