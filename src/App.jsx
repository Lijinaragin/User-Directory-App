// src/App.jsx
import React from 'react';
import { Userprovider } from './Context/Usercontext';
import Header from './Components/Header';
import Userlist from './Components/Userlist';
import UserModal from './Components/Usermodel';

function App() {
  return (
    <Userprovider>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header/>
        <main className="flex-grow p-4">
          <Userlist/>
        </main>
        <UserModal/>
      </div>
    </Userprovider>
  );
}

export default App;
