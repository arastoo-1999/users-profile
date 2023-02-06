import React from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

// Context
import UsersContextProvider from "./context/UsersContextProvider.js";


// Components
import User from './shared/User.js';
import UserDetails from './Components/UserDetails.js';

const App = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <UsersContextProvider>
          <Routes>
              <Route path="/userdetails/:id" element={<UserDetails />} />
              <Route path="/user" element={<User />} />
              <Route path="/*" element={<Navigate to="/user" />} />
          </Routes>
      </UsersContextProvider>
    </div>
  );
};

export default App;
