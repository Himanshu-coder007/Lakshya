import React, { useState } from 'react'
import Logo from '../../assets/logo.svg'
import Seperator from '../../assets/Seperator.svg'
import UserName from '../../assets/UserName.svg'
import Password from '../../assets/Password.svg'
import styles from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from "react-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['user']);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fetchLoginDetails = async (e) => {
    e.preventDefault();

    try {
      axios.post("http://localhost:5000/user/login", formData)
        .then(res => {
          if (res.data.message === "Login successful!") {
            setCookie('user', res.data.user, { path: '/' });
              navigate(`/${res.data.user.role}`);
              localStorage.setItem('activeLink', 'Home');
          } else {
            alert(res.data.message);
          }
        })
    } catch (e) {
      console.log(e);
    }
    setFormData({
      email: '',
      password: ''
    });
  };

  return (
    <div className={styles.login}>
      <div className={styles.leftcircle}></div>
      <div className={styles.leftcylinder}></div>
      <div className={styles.rightcircle}></div>
      <div className={styles.rightcylinder}></div>
      <div></div>
      <div className={styles.innerLoginDiv}>
        <img src={Logo} alt='Logo' className={styles.loginLogo} />
        <form className={styles.loginForm}>
          <div className={styles.chooseLanguageDiv}>
            <p>Choose Preffered Language</p>
            <span className={styles.select}></span>
            <select>
              <option>English</option>
              <option>Hindi</option>
              <option>Marathi</option>
              <option>Gujrati</option>
              <option>Bengali</option>
            </select>
          </div>
          <img src={Seperator} alt='Seperator' className={styles.seperator} />
          <div className={styles.inputDiv}>
            <img src={UserName} alt='User' className={styles.inputImage} />
            <input
              type='text'
              name="email"
              className={styles.inputTag}
              placeholder='Enter Email'
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputDiv}>
            <img src={Password} alt='Password' className={styles.inputImage} />
            <input
              type='password'
              name="password"
              className={styles.inputTag}
              placeholder='Enter Password'
              onChange={handleInputChange}
            />
          </div>
          <p className={styles.forgotPass}>Forgot Password</p>
          <button onClick={fetchLoginDetails}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login