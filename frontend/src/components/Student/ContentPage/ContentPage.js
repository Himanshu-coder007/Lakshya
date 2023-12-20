import React, { useEffect, useState } from 'react'
import styles from './ContentPage.module.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const ContentPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [cookies, setCookie] = useCookies(['user'])
    const [topic, setTopic] = useState({})
    const [learningStyle, setLearningStyle] = useState("")
    const [user, setUser] = useState({})
    const [question, setQuestion] = useState({})

    useEffect(() => {
        try {
            axios.get(`http://localhost:5000/contentseperateRoutes/${id}`)
                .then((res) => {
                    console.log(res.data)
                    setTopic(res.data)
                })
        } catch (e) {
        }
    }, [id])

    useEffect(() => {
        if (cookies.user && cookies.user._id) {
            try {
                axios.get(`http://localhost:5000/user/${cookies.user._id}`)
                    .then((res) => {
                        console.log(res.data);
                        setUser(res.data)
                    })
            } catch (e) {
            }
        }
    }, [cookies.user])

    useEffect(() => {
        setLearningStyle(user.learningStyle)
    }, [user])

    const fetchQuiz = () => {
        try {
            axios.get(`http://localhost:5000/generateAssessment/${topic.subjectName}/${topic._id}`)
                .then((response) => {
                    setQuestion(response.data)
                    navigate(`/student/quiz/${response.data[0]._id}`)
                })
        } catch (e) {
        }
    }

    const preprocessYouTubeLink = (link) => {
        const videoId = link.split('/').pop();
        return `https://www.youtube.com/embed/${videoId}`;
    };

    const preprocessGoogleDriveLink = (link) => {
        const fileId = link.match(/[-\w]{25,}/);
        if (fileId) {
            return `https://drive.google.com/file/d/${fileId[0]}/preview`;
        } else {
            return null;
        }
    };

    return (
        <div className={styles.studentHomePage}>
            <header className={styles.header}>
                <div>
                    <h1>WELCOME to Lakshya!!</h1>
                </div>
                <div className={styles.userProfile}>
                    {user.name}
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
                <div className={styles.mainContent}>
                    <h1>{topic.topicName}</h1>
                    <div>
                        {learningStyle === 'Visual' && (
                            <>
                                <div className={styles.recommended}>
                                    <h4>Recommended Content according to your Learning Style</h4>
                                    <iframe
                                        width="560"
                                        height="315"
                                        src={preprocessYouTubeLink(topic.visualContent)}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                {/* <div className={styles.someMore}>
                                    <h4>Want to Learn Through Some More Content...</h4>
                                    <iframe
                                        width="560"
                                        height="315"
                                        src={preprocessYouTubeLink(topic.auralContent)}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                    <iframe
                                        title="Google Drive Document"
                                        src={preprocessGoogleDriveLink(topic.readingContent)}
                                        width="600"
                                        height="400"
                                        allowFullScreen
                                        sandbox="allow-scripts allow-same-origin"
                                    ></iframe>
                                    <iframe
                                        width="560"
                                        height="315"
                                        src={preprocessYouTubeLink(topic.kinestheticContent)}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div> */}
                            </>
                        )}
                        {learningStyle === 'Aural' && (
                            <iframe
                                width="560"
                                height="315"
                                src={preprocessYouTubeLink(topic.visualContent)}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        )}
                        {learningStyle === 'Reading / Writing' && (
                            <iframe
                                title="Google Drive Document"
                                src={preprocessGoogleDriveLink(topic.readingContent)}
                                width="600"
                                height="400"
                                allowFullScreen
                                sandbox="allow-scripts allow-same-origin"
                            ></iframe>
                        )}
                        {learningStyle === 'Kinesthetic' && (
                            <iframe
                                width="560"
                                height="315"
                                src={preprocessYouTubeLink(topic.visualContent)}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                    <div className={styles.quiz}>
                        <button onClick={fetchQuiz}>Quiz</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentPage