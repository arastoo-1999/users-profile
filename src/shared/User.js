import React, { useContext, useState } from 'react';

import { UsersContext } from '../context/UsersContextProvider';

// Components
import SerachUser from '../Components/SerachUser';

//styles
import styles from "./User.module.css";

const User = () => {

    const Users = useContext(UsersContext);
    const [search, setSearch] = useState("");

    const changeHandler = event => {
        setSearch(event.target.value);
    }

    const FilteredUser = Users.filter(user => user.username.includes(search));

    return (
        <>
            <div className={styles.container}>
                <input className={styles.input} type="text" placeholder="Search..." value={search} onChange={changeHandler} />
            </div>
            <div>
            {
                FilteredUser.map(user =>  
                            <SerachUser 
                            key={user.id} 
                            userData={user}
                            />)
            }
            </div>
        </>
    );
};

export default User;