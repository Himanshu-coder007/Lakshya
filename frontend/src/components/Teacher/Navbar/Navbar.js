import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Logo from '../../../assets/logo.svg';
import Account from '../../../assets/Account.png';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { Unity } from 'react-unity-webgl';
import UnityGame from './UnityGame';

const Navbar = () => {
    const [cookies, setCookie] = useCookies(['user']);
    const [userName, setUserName] = useState("");
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        if (cookies.user)
            setUserName(cookies.user.name);
    }, [cookies.user])

    return (
        <>
            {/* <div className={styles.teacherProfile}>
                <p>{userName.split(" ")[0]}</p>
                <img src={Account} alt='Profile' className={styles.accountImage} />
            </div> */}
            <nav className={[styles.teacherNav, `${expanded ? styles.expanded : ''}`].join(' ')}>
                <div 
                    className={styles.homeLogo}
                    onClick={() => setExpanded(!expanded)}
                >
                    <img src={Logo} alt='Logo' className={expanded ? styles.expandedImage : ''} />
                    <p>Home</p>
                </div>
                <div className={styles.homeLogo}>
                    <img src={Logo} alt='Logo' />
                </div>
                <div className={styles.teacherLinks}>
                    {/* <Link to="/teacher/"><p>Home</p></Link>
                    <p>References</p>
                    <p>Options</p>
                    <p>Create</p>
                    <p>Discuss</p> */}
                    <p>Su</p>
                    <p>Su</p>
                    <p>Su</p>
                    <p>Su</p>
                    <p>Su</p>
                    <p>Su</p>
                </div>
            </nav>

            {/* <UnityGame /> */}

            {/* Mobile Navbar 
                <nav className={styles.teacherNav}></nav> 
            */}
        </>
    )
}

export default Navbar