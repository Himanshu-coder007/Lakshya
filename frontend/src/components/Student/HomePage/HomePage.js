import React from 'react';
import styles from './styles.module.css';
import Eco from '../../../assets/eco.png';
import Eng from '../../../assets/eng.svg';
import Hindi from '../../../assets/hindi.png';
import Geo from '../../../assets/geo.png';
import Hist from '../../../assets/hist.svg';
import Science from '../../../assets/science.png';
import Math from '../../../assets/science.svg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={styles.studentHomePage}>
      <header className={styles.header}>
        <div>
          <h1>WELCOME to Lakshya!!</h1>
          <div className={styles['search-bar']}>
            <form method="GET">
              <input type="text" placeholder="Search..." name="search" />
              <input type="submit" value="Search" />
            </form>
          </div>
        </div>
      </header>
      <div className={styles.studentdashboardmainnDiv}>
        <div className={styles['side-bar']}>
          <div id={styles['close-btn']}>
            <i className="fas fa-times"></i>
          </div>
          <nav className={styles.navbar}>
            <Link><p className="fas fa-home"></p><span>Home</span></Link>
            <Link><p className="fas fa-graduation-cap"></p><span>Courses</span></Link>
            <Link><p className="fas fa-chalkboard-user"></p><span>Quiz</span></Link>
            <Link to="/student/screeningTest"><p className="fas fa-chalkboard-user"></p><span>LSI Test</span></Link>
          </nav>
        </div>
        <div className={styles.studentDashboardInnerDiv}>
          <div>
            <h1>Course In Progress</h1>
            <div className={styles.containers}>
              <div className={styles.container}>
                <div className={styles.one}>
                  <img src={Science} alt="HTML5 Icon" />
                </div>
                <div className={styles.two}>
                  <p>Science</p>
                  <p>60%</p>
                  <div className={styles.progress}>
                    <div className={styles['progress-bar']}></div>
                  </div>
                </div>
              </div>

              <div className={styles.container}>
                <div className={styles.one}>
                  <img src={Math} alt="HTML5 Icon" />
                </div>
                <div className={styles.two}>
                  <p>Mathematics</p>
                  <p>40%</p>
                  <div className={styles.progress}>
                    <div className={styles['progress-bar']}></div>
                  </div>
                </div>
              </div>

              <div className={styles.container}>
                <div className={styles.one}>
                  <img src={Eng} alt="HTML5 Icon" />
                </div>
                <div className={styles.two}>
                  <p>English</p>
                  <p>30%</p>
                  <div className={styles.progress}>
                    <div className={styles['progress-bar']}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.p1}>
            <div className={styles.c1}>
              <h2>Subjects</h2>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.imageBox}>
              <div className={styles.img}>
                <img src={Math} alt="Image 1" />
              </div>
              <h4>Mathematics</h4>
            </div>
            <div className={styles.imageBox}>
              <img src={Hist} alt="Image 2" />
              <h4>History</h4>
            </div>
            <div className={styles.imageBox}>
              <img src={Eng} alt="Image 3" />
              <h4>English</h4>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.imageBox}>
              <div className={styles.img}>
                <img src={Geo} alt="Image 1" />
              </div>
              <h4>Geography</h4>
            </div>
            <div className={styles.imageBox}>
              <img src={Eco} alt="Image 2" />
              <h4>Economics</h4>
            </div>
            <div className={styles.imageBox}>
              <img src={Hindi} alt="Image 3" />
              <h4>Hindi</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'

// const Home = () => {
//   const [subjects, setSubjects] = useState([])

//   useEffect(() => {
//     try {
//       axios.get('http://localhost:5000/subject')
//         .then((response) => {
//           setSubjects(response.data);
//         })
//     } catch (e) {
//       console.log(e.message)
//     }
//   }, [])
//   return (
//     <div>
//       <h1>Subjects: </h1>
//       {subjects.map((subject, index) => (
//         <Link to={`/student/seperateSubject/${subject._id}`}><div>
//           <h3>{subject.subjectName}</h3>
//           <h4>{subject.class}</h4>
//         </div>
//         </Link>
//       ))}
//       <Link to="/Student/screeningTest">
//         Screening Test
//       </Link>
//     </div>
//   )
// }

// export default Home