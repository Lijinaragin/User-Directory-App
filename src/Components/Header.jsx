import React, { useContext } from 'react';
import { Usercontext } from '../Context/Usercontext';

function Header() {
  const { searchQuery, setSearchQuery, setSortKey } = useContext(Usercontext);

  return (
    <div className="bg-blue-600 text-white p-4 flex flex-col md:flex-row items-center justify-between gap-2">
      <h1 className="text-2xl font-bold">User Directory App</h1>
      <input
        type="text"
        placeholder="Search by name or email..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 rounded w-full md:w-1/3 "
      />
      <select
        onChange={(e) => setSortKey(e.target.value)}
        className="p-2 rounded text-black"
      >
        <option value="name">Sort by Name</option>
        <option value="email">Sort by Email</option>
      </select>
    </div>
  );
}

export default Header;
