// src/components/Userlist.jsx
import React, { useContext } from 'react';
import { Usercontext } from '../Context/Usercontext';

function Userlist() {
  const { filteredUsers, setSelectedUser, loadMore, hasMore } = useContext(Usercontext);

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-600 text-white text-left">
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Phone</th>
              <th className="py-3 px-6">Company</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-100 cursor-pointer"
                onClick={() => setSelectedUser(user)}
              >
                <td className="py-3 px-6">{user.name}</td>
                <td className="py-3 px-6">{user.email}</td>
                <td className="py-3 px-6">{user.phone}</td>
                <td className="py-3 px-6">{user.company?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {hasMore && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMore}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Userlist;
