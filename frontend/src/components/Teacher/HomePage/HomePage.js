import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import styles from './HomePage.module.css';
import Logo from '../../../assets/logo.svg';
import Account from '../../../assets/Account.png';

const Home = () => {
  const [cookies, setCookie] = useCookies(['user']);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (cookies.user)
      setUserName(cookies.user.name);
  }, [cookies.user])
  return (
    <div className={styles.teacherHome}>
      <nav className={styles.teacherNav}>
        <div className={styles.homeLogo}>
          <img src={Logo} alt='Logo' />
        </div>
        <div className={styles.teacherLinks}>
          <p>Home</p>
          <p>References</p>
          <p>Options</p>
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

      <div className={styles.teacherInnerDiv}>
      </div>
    </div>
  )
}

export default Home