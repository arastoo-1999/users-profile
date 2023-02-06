import React, { useState, useEffect, createContext } from 'react';

import { getUsers } from '../services/api';

export const UsersContext = createContext();

const UsersContextProvider = ({children}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setUsers(await getUsers());
        }

        fetchAPI();
    }, [])

    return (
        <UsersContext.Provider value={users}>
            {children}
        </UsersContext.Provider>
    );
};

export default UsersContextProvider;