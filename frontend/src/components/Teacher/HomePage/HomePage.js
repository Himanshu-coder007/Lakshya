import React, { useEffect, useState } from 'react'
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className={styles.studentHomePage}>
      <header className={styles.header}>
        <div>
          <h1>WELCOME to Lakshya!!</h1>
        </div>
      </header>
      <div className={styles.studentdashboardmainnDiv}>
        <div className={styles['side-bar']}>
          <div id={styles['close-btn']}>
            <i className="fas fa-times"></i>
          </div>
          <nav className={styles.navbar}>
            <Link to='/teacher/'><span>Home</span></Link>
            <Link to="/teacher/generateAssessment"><span>Generate Assessment</span></Link>
            <Link to="/teacher/viewResult"><span>View Result</span></Link>
            <Link to="/teacher/addContent"><span>Add Content</span></Link>
            <Link to="/teacher/addSubject"><span>Add Subject</span></Link>
          </nav>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Home