import React, { useContext } from 'react';

import { useParams } from 'react-router-dom';

// Context
import { UsersContext } from '../context/UsersContextProvider';

// styles
import styles from "./UserDetails.module.css";

// Images
import Image from "..//assets/Userimage.jpg";
import Telegram from "..//assets/telegram.png";
import Instagram from "..//assets/instagram.png";
import Facebook from "..//assets/facebook.png";

const UserDetails = () => {

    const data = useContext(UsersContext);
    const params = useParams();
    const id = params.id;
    const user = data[id - 1];
    const { username, name, email, phone } = user;
    console.log(user);


    return (
        <div className={styles.Container}>
            <div className={styles.Detailscontainer}>
                <p className={styles.username}><span>UserId:</span> @{username.toUpperCase()}</p>
                <img src={Image} alt="userimage" />
                <div className={styles.Namescontainer}>
                    <span className={styles.firstname}>{name.firstname.toUpperCase()}</span>
                    <span className={styles.lastname}>{name.lastname.toUpperCase()}</span>
                </div>
                <div className={styles.Mediacontainer}>
                    <div className={styles.telegram}><img src={Telegram} alt="telegramicon" /></div>
                    <div className={styles.instagram}><img src={Instagram} alt="instagramicon" /></div>
                    <div className={styles.facebook}><img src={Facebook} alt="facebookicon" /></div>
                </div>
                <div className={styles.Connections}>
                    <p><span>Call: </span>{phone}</p>
                    <p><span>Email: </span>{email}</p>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;