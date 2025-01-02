import React from 'react';

interface ContactCardProps {
  name: string;
  email: string;
  message: string;
  onDelete?: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ name, email, message }) => {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-sm">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">{email}</p>
      <p className="text-gray-800">{message}</p>
      <button className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md">Delete</button>
    </div>
  );
};

export default ContactCard; 