import React from 'react';
import { Link } from "react-router-dom";

import Image from "..//assets/Userimage.jpg";

// styles
import styles from "./SearchUser.module.css";


const SerachUser = ({userData}) => {

    return (
        <div className={styles.Container}>
            <div className={styles.userContainer}>
                <img src={Image} alt="userimage" />
                <Link to={`/userdetails/${userData.id}`}>
                    <span>{userData.username.toUpperCase()}</span>
                </Link>
            </div>
        </div>
    );
};

export default SerachUser;