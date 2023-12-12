import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Logo from '../../../assets/logo.svg';
import Account from '../../../assets/Account.png';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [cookies, setCookie] = useCookies(['user']);
    const [userName, setUserName] = useState("");

    useEffect(() => {
        if (cookies.user)
            setUserName(cookies.user.name);
    }, [cookies.user])

    return (
        <>
            <nav className={styles.teacherNav}>
                <div className={styles.homeLogo}>
                    <img src={Logo} alt='Logo' />
                </div>
                <div className={styles.teacherLinks}>
                    <Link to="/teacher/"><p>Home</p></Link>
                    <p>References</p>
                    <p>Options</p>
                    <Link to='/teacher/viewStudent'><p>Add Students</p></Link>
                    <p>Discuss</p>
                </div>
                <div className={styles.teacherProfile}>
                    <p>{userName.split(" ")[0]}</p>
                    <img src={Account} alt='Profile' className={styles.accountImage} />
                </div>
            </nav>

            {/* Mobile Navbar 
                <nav className={styles.teacherNav}></nav> 
            */}
        </>
    )
}

export default Navbar