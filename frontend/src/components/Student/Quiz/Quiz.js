import React, { useState, useEffect } from 'react';
import "./QuizQuestion.css";
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const QuizComponent = () => {
    const navigate = useNavigate();
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const { id } = useParams();
    const [questionsDetails, setQuestionsDetails] = useState({ questions: [] });

    useEffect(() => {
        try {
            axios.get(`http://localhost:5000/generateAssessment/${id}`)
                .then((response) => {
                    setQuestionsDetails(response.data)
                    console.log(response.data)
                })
        } catch (err) {
            console.log(err);
        }
    }, []);

    const submitQuiz = () => {
        const quizResults = {};
        document.querySelectorAll('input[type="radio"]:checked').forEach(input => {
            const questionName = input.name;
            const optionValue = input.value;
            quizResults[questionName] = optionValue;
        });

        if (document.querySelectorAll('input[type="radio"]:checked').length !== questionsDetails.questions.length) {
            alert('Please answer all the questions!');
        }
        else {
            const responses = Object.entries(quizResults)
                .map(([questionName, value]) => `${encodeURIComponent(value)}`)
                .join('&');

            const url = `/Student/Quiz/result/${responses}/${questionsDetails._id}`;
            navigate(url);
        }
    }

    const handleOptionSelect = (questionId, option) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionId]: option,
        });
    };

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
                <div className='MCQQuesBackground'>
                    <h1 className='quizQuestionsHeading'>Quiz Questions</h1>
                    <form className='quizQuetionForm'>
                        {questionsDetails.questions.map((question, index) => (
                            <div key={question._id} className='seperateMCQQues'>
                                <h3 className='questionSection'>Question {index + 1}: {question.question}</h3>
                                <ul>
                                    {question.options.map((option, optionIndex) => (
                                        <li key={optionIndex} className='option'>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name={`question${question._id}`}
                                                    value={option}
                                                    checked={selectedAnswers[question._id] === option}
                                                    onChange={() => handleOptionSelect(question._id, option)}
                                                />
                                                {option}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <button onClick={submitQuiz} className='MCQSubmit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default QuizComponent;


// import React, { useEffect, useState } from 'react';
// import './Quiz.css';
// import { useNavigate, Link, useParams } from 'react-router-dom';
// import axios from 'axios';

// const QuizPage = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [questionsDetails, setQuestionsDetails] = useState();
//     const questions = [
//         {
//             id: 1,
//             question: "What is the smallest prime number?",
//             answer: "2",
//             options: [
//                 "1",
//                 "2",
//                 "3",
//                 "0"
//             ]
//         },
//         {
//             id: 2,
//             question: "Write the Roman numeral for 50",
//             answer: "L",
//             options: [
//                 "L",
//                 "C",
//                 "D",
//                 "X"
//             ]
//         },
//         {
//             id: 3,
//             question: "Express 0.75 as a fraction in its simplest form",
//             answer: "3/4",
//             options: [
//                 "3/5",
//                 "3/10",
//                 "3/4",
//                 "5/4"
//             ]
//         },
//         {
//             id: 4,
//             question: "What is the place value of 6 in the number 6,739?",
//             answer: "60",
//             options: [
//                 "60",
//                 "6",
//                 "600",
//                 "6000"
//             ]
//         },
//         {
//             id: 5,
//             question: "Find the product of 312 and 45.?",
//             answer: "14040",
//             options: [
//                 "14,040",
//                 "14,120",
//                 "14220",
//                 "14320"
//             ]
//         },
//         {
//             id: 6,
//             question: "Write the successor of 499.",
//             answer: "500",
//             options: [
//                 "500",
//                 "326",
//                 "147",
//                 "450"
//             ]
//         },
//         {
//             id: 7,
//             question: "If a shirt costs $35 and is on sale for 20% off, what is the discounted price?",
//             answer: "$28",
//             options: [
//                 "$30",
//                 "$28",
//                 "$32",
//                 "$25"
//             ]
//         },
//         {
//             id: 8,
//             question: "Express 3/5 as a percentage.?",
//             answer: "60%",
//             options: [
//                 "30%",
//                 "50%",
//                 "60%",
//                 "75%"
//             ]
//         },
//         {
//             id: 9,
//             question: "What is the difference between the smallest 4-digit number and the greatest 3-digit number?",
//             answer: "1001",
//             options: [
//                 "890",
//                 "1000",
//                 "1001",
//                 "999"
//             ]
//         },
//         {
//             id: 10,
//             question: "What is the sum of the first 10 multiples of 4?",
//             answer: "240",
//             options: [
//                 "180",
//                 "200",
//                 "220",
//                 "240"
//             ]
//         },
//     ];

//     useEffect(() => {
//         try {
//             axios.get(`http://localhost:5000/generateAssessment/${id}`)
//                 .then((response) => {
//                     setQuestionsDetails(response.data)
//                     console.log(response.data)
//                 })
//         } catch (err) {
//             console.log(err);
//         }
//     }, [id])

//     const [questionCount, setQuestionCount] = useState(0);
//     const [points, setPoints] = useState(0);

//     const show = (count) => {
//         let question = questionsDetails[count];
//         let [first, second, third, fourth] = question.options;

//         return (
//             <>
//                 <div>
//                     <h2>Q{count + 1}. {question.question}</h2>
//                     <ul className="option_group">
//                         <li className="option">{first}</li>
//                         <li className="option">{second}</li>
//                         <li className="option">{third}</li>
//                         <li className="option">{fourth}</li>
//                     </ul>
//                 </div>
//             </>
//         );
//     };

//     useEffect(() => {
//         toggleActive();
//     }, []);

//     const toggleActive = () => {
//         let option = document.querySelectorAll("li.option");
//         for (let i = 0; i < option.length; i++) {
//             option[i].onclick = function () {
//                 for (let i = 0; i < option.length; i++) {
//                     if (option[i].classList.contains("active")) {
//                         option[i].classList.remove("active");
//                     }
//                 }
//                 option[i].classList.add("active");
//             };
//         }
//     };

//     const next = () => {
//         sessionStorage.setItem("points", points);

//         if (questionCount === questions.length - 1) {
//             navigate("/student/finalResult");
//         }

//         let user_answer = document.querySelector("li.option.active").innerHTML;

//         if (user_answer === questions[questionCount].answer) {
//             setPoints(points + 10);
//             sessionStorage.setItem("points", points);
//         }

//         setQuestionCount(questionCount + 1);
//     };

//     return (
//         <div className="wrapper">
//             <header className="header">
//                 <div>
//                     <h1>WELCOME to Lakshya!!</h1>
//                 </div>
//             </header>
//             <div className="studentdashboardmainnDiv">
//                 <div className="side-bar">
//                     <div id="close-btn">
//                         <i className="fas fa-times"></i>
//                     </div>
//                     <nav className="navbar">
//                         <Link to='/student/'><span>Home</span></Link>
//                         <Link to="/student/quiz"><span>Quiz</span></Link>
//                         <Link to="/student/screeningTest"><span>LSI Test</span></Link>
//                     </nav>
//                 </div>
//                 <div className="quiz">
//                     <div className="quiz_header">
//                         <div className="quiz_user">
//                             <h4>Quiz <span className="name"></span></h4>
//                         </div>
//                     </div>

//                     <div className="quiz_body">
//                         <div id="questions">
//                             {show(questionCount)}
//                         </div>

//                         <button className="btn-next" onClick={next}>Next Question</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default QuizPage;
