import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import './QuizResult.css'
import { useCookies } from 'react-cookie';

const QuizResult = () => {
    const [questionsDetails, setQuestionsDetails] = useState({ questions: [] })
    const { id, responses } = useParams();
    const splitResponses = responses.split('&');
    const [color, setColor] = useState();
    const [totalMarks, setTotalMarks] = useState(0);
    const [learner, setLearner] = useState("");
    const [cookies, setCookie] = useCookies(['user'])

    useEffect(() => {
        try {
            axios.get(`http://localhost:5000/generateAssessment/${id}`)
                .then((response) => {
                    console.log(response.data);
                    setQuestionsDetails(response.data)
                    calculateTotalMarks(response.data.questions);
                })
        } catch (err) {
        }
    }, []);

    const calculateTotalMarks = (questions) => {
        let marks = 0;
        questions.forEach((question, index) => {
            if (question.correctOption === splitResponses[index]) {
                marks += parseInt(question.marks);
            }
        });
        setTotalMarks(marks);
        console.log(marks)
        console.log(questionsDetails.thresholdHigh, " ", questionsDetails.thresholdLow)
        if(marks > questionsDetails.thresholdHigh)
            setLearner('High Learner')
        else if(marks > questionsDetails.thresholdLow && marks <= questionsDetails.thresholdHigh)
            setLearner('Medium Learner')
        else
            setLearner('Slow Learner')
    }

    useEffect(() => {
        if(cookies.user) {
            const object = {
                subjectName: questionsDetails.subjectName,
                class: "6",
                studentId: cookies.user._id,
                marks: totalMarks,
                hml: learner,
                quizId: questionsDetails._id
            }
            try {
                axios.post('http://localhost:5000/quizData', object)
                    .then((response) => {
                    })
            } catch(e) {
            }
        }
    }, [ calculateTotalMarks, cookies.user ])

    return (
        <div className="wrapperQuiz">
            <header className="header">
                <div>
                    <h1>WELCOME to Lakshya!!</h1>
                </div>
            </header>
            <div className="studentdashboardmainnDiv">
                <div className="side-bar">
                    <div id="close-btn">
                        <i className="fas fa-times"></i>
                    </div>
                    <nav className="navbar">
                        <Link to='/student/'><span>Home</span></Link>
                        <Link to="/student/quiz"><span>Quiz</span></Link>
                        <Link to="/student/screeningTest"><span>LSI Test</span></Link>
                    </nav>
                </div>
                <div className="quizresult">
                    {questionsDetails.questions.map((question, index) => (
                        <div>
                            <h3>{question.question}</h3>
                            <ul>
                                {question.options.map((option, optionIndex) => (
                                    <li key={optionIndex} className={splitResponses[index] !== option ? 'option' : question.correctOption === option && option === splitResponses[index] ? 'option greenInput' : 'option redInput'}>
                                        <label>
                                            <input
                                                type="radio"
                                                name={`question${question._id}`}
                                                value={option}
                                                checked={splitResponses[index] === option}
                                                readOnly
                                            />
                                            {option}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                            <h3>{question.options.correctOption}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default QuizResult