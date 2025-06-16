// src/Context/Usercontext.js
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Usercontext = createContext();

export const Userprovider = ({ children }) => {
  const [userdetails, setUserdetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5);
  const [sortKey, setSortKey] = useState("name");
  const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);

  // Debounce logic
  useEffect(() => {
    const delay = setTimeout(() => setDebouncedSearch(searchQuery), 300);
    return () => clearTimeout(delay);
  }, [searchQuery]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUserdetails(res.data))
      .catch(() => console.log("Error fetching users"));
  }, []);

  const filteredUsers = userdetails
    .filter(user =>
      user.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      user.email.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    .sort((a, b) => a[sortKey].localeCompare(b[sortKey]))
    .slice(0, visibleCount);

  const loadMore = () => setVisibleCount(prev => prev + 5);

  return (
    <Usercontext.Provider
      value={{
        filteredUsers,
        searchQuery,
        setSearchQuery,
        selectedUser,
        setSelectedUser,
        setSortKey,
        loadMore,
        hasMore: visibleCount < userdetails.length
      }}
    >
      {children}
    </Usercontext.Provider>
  );
};
