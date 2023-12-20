import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useCookies } from 'react-cookie'

const HomePage = () => {
  const [subjects, setSubjects] = useState([]);
  const [subjectId, setSubjectId] = useState("");
  const [topics, setTopics] = useState([]);
  const [cookies, setCookie] = useCookies(['user']);
  const [user, setUser] = useState("");

  useEffect(() => {
    try {
      axios.get('http://localhost:5000/subject')
        .then((res) => {
          setSubjects(res.data)
        })
    } catch (e) {
      console.log(e);
    }
  }, [])

  useEffect(() => {
    if(cookies.user) {
      setUser(cookies.user.name)
    }
  }, [cookies.user])

  useEffect(() => {
    if (subjectId.toString().length > 0) {
      try {
        axios.get(`http://localhost:5000/content`)
          .then((res) => {
            console.log(res.data)
            setTopics(res.data)
          })
      } catch (e) {
        console.log(e);
      }
    }
  }, [subjectId])

  const handleSubjectChange = (event) => {
    const selectedSubjectId = event.target.value;
    setSubjectId(selectedSubjectId);
  }

  return (
    <div className={styles.studentHomePage}>
      <header className={styles.header}>
        <div>
          <h1>WELCOME to Lakshya!!</h1>
        </div>
        <div className={styles.userProfile}>
          {user}
        </div>
      </header>
      <div className={styles.studentdashboardmainnDiv}>
        <div className={styles['side-bar']}>
          <div id={styles['close-btn']}>
            <i className="fas fa-times"></i>
          </div>
          <nav className={styles.navbar}>
            <Link to='/student/'><span>Home</span></Link>
            <Link to="/student/screeningTest"><span>LSI Test</span></Link>
          </nav>
        </div>
        <div className={styles.studentDashboardInnerDiv}>
          <div className={styles.subjectSelection}>
            <label for="subject">Select a Subject:</label>
            <select
              id={styles.subject}
              name="subject"
              onChange={handleSubjectChange}
              value={subjectId}
            >
              <option value="">Select one...</option>
              {subjects.map((subject) => (
                <option key={subject._id} value={subject._id}>
                  {subject.subjectName}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.primary}>
            {console.log(topics)}
            {topics.map((topic, index) => (
              topic.subjectName === subjectId ? (
                <Link to={`/student/contentPage/${topic._id}`} className={styles.chapterBox}>
                  <div className={styles.first}>
                    <div className={styles.chapterIconOuterDiv} style={{ backgroundImage: "conic-gradient(#38C3FF, #4FDFFF, #38C3FF)" }}>
                      <div className={styles.chapterIconInnerDiv}>
                        <div className={[styles.chapterIconInnerDiv, styles.p].join(" ")} style={{ color: "#38c3ff" }}>
                          <p>{index + 1}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.second}>
                    <h2>{topic.topicName}</h2>
                    <div div className={styles.progressBar}>
                      <div className={styles.progress} style={{ width: "50%" }}></div>
                    </div>
                    <p>Progress: 50%</p>
                  </div>
                </Link>
              ) : <></>
            ))}
            {/* 
            <div class="chapter-box">
              <div class="first">
                <div class="chapterIconOuterDiv" style="background-image: conic-gradient(#FF451C, #FF8135, #FF451C);">
                  <div class="chapterIconInnerDiv">
                    <div class="chapterIconInnerDiv p" style="color: #FF451C;">
                      <p>2</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="second">
                <h2>Chapter 2: Whole numbers</h2>
                <div class="progress-bar">
                  <div class="progress" style="width: 25%;"></div>
                </div>
                <p>Progress: 25%</p>
              </div>
            </div>


            <div class="chapter-box">
              <div class="first">
                <div class="chapterIconOuterDiv" style="background-image: conic-gradient(#AD33FF, #AD33FF, #AD33FF);">
                  <div class="chapterIconInnerDiv">
                    <div class="chapterIconInnerDiv p" style="color: #AD33FF;">
                      <p>3</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="second">
                <h2>Chapter 3: Playing with numbers</h2>
                <div class="progress-bar">
                  <div class="progress" style="width: 40%;"></div>
                </div>
                <p>Progress: 40%</p>
              </div>
            </div>


            <div class="chapter-box">
              <div class="first">
                <div class="chapterIconOuterDiv" style="background-image: conic-gradient(#FFD233, #FFB133, #FFD233);">
                  <div class="chapterIconInnerDiv">
                    <div class="chapterIconInnerDiv p" style="color: #FFD233;">
                      <p>4</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="second">
                <h2>Chapter 4: Basic Geometric ideas</h2>
                <div class="progress-bar">
                  <div class="progress" style="width: 20%;"></div>
                </div>
                <p>Progress: 20%</p>
              </div>
            </div>


            <div class="chapter-box">
              <div class="first">
                <div class="chapterIconOuterDiv" style="background-image: conic-gradient(#3472FF, #334EFF, #3472FF);">
                  <div class="chapterIconInnerDiv">
                    <div class="chapterIconInnerDiv p" style="color: #3472FF;">
                      <p>5</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="second">
                <h2>Chapter 5: Understanding Elementry Shapes</h2>
                <div class="progress-bar">
                  <div class="progress" style="width: 50%;"></div>
                </div>
                <p>Progress: 70%</p>
              </div>
            </div>


            <div class="chapter-box">
              <div class="first">
                <div class="chapterIconOuterDiv" style="background-image: conic-gradient(#FF5833, #FF7A33, #FF5833);">
                  <div class="chapterIconInnerDiv">
                    <div class="chapterIconInnerDiv p" style="color: #FF5833;">
                      <p>6</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="second">
                <h2>Chapter 6: Integers</h2>
                <div class="progress-bar">
                  <div class="progress" style="width: 50%;"></div>
                </div>
                <p>Progress: 50%</p>
              </div>
            </div>


            <div class="chapter-box">
              <div class="first">
                <div class="chapterIconOuterDiv" style="background-image: conic-gradient(#2EE52E, #2EE56B, #2EE52E);">
                  <div class="chapterIconInnerDiv">
                    <div class="chapterIconInnerDiv p" style="color: #2EE52E;">
                      <p>7</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="second">
                <h2>Chapter 7: Fractions</h2>
                <div class="progress-bar">
                  <div class="progress" style="width: 40%;"></div>
                </div>
                <p>Progress: 40%</p>
              </div>
            </div>


            <div class="chapter-box">
              <div class="first">
                <img src="../images/Frame 2-7.svg" alt="Chapter Icon" />
              </div>
              <div class="second">
                <h2>Chapter 8: Decimals</h2>
                <div class="progress-bar">
                  <div class="progress" style="width: 20%;"></div>
                </div>
                <p>Progress: 20%</p>
              </div>
            </div>
            <div class="chapter-box">
              <div class="first">
                <img src="../images/Frame 2-7.svg" alt="Chapter Icon" />
              </div>
              <div class="second">
                <h2>Chapter 9: Data Handling</h2>
                <div class="progress-bar">
                  <div class="progress" style="width: 20%;"></div>
                </div>
                <p>Progress: 20%</p>
              </div>
            </div> */}
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
// import { useCookies } from 'react-cookie';

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