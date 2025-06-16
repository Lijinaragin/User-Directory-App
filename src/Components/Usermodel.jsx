// src/components/UserModal.jsx
import React, { useContext } from 'react';
import { Usercontext } from '../Context/Usercontext';

function UserModal() {
  const { selectedUser, setSelectedUser } = useContext(Usercontext);
  if (!selectedUser) return null;

  const { name, email, phone, website, address, company } = selectedUser;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-md p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Website:</strong> {website}</p>
        <p><strong>Company:</strong> {company?.name}</p>
        <p><strong>Address:</strong> {address?.street}, {address?.city}, {address?.zipcode}</p>
        <button
          onClick={() => setSelectedUser(null)}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default UserModal;
