import React, { useEffect, useState } from 'react';
import './Quiz.css'
import { useCookies } from 'react-cookie';
import axios from 'axios';

const QuizFinal = () => {
    const [userName, setUserName] = useState();
    const [userPoints, setUserPoints] = useState();

    const [cookies, setCookie] = useCookies(['user'])

    useEffect(() => {
        setUserName(sessionStorage.getItem("name"));
        setUserPoints(sessionStorage.getItem("points"));
    }, []);

    useEffect(() => {
        document.querySelector(".name").innerHTML = userName;
        document.querySelector(".points").innerHTML = userPoints;

        // if (cookies && cookies.user) {
        //     try {
        //         const object = {
        //             subjectName: 'svi',
        //             class: 6,
        //             studentId: cookies.user._id,
        //             marks: userPoints
        //         }
        //         axios.post('http://localhost:5000/quizData', object)
        //             .then((res) => {
        //                 console.log('success')
        //             })
        //             .else(() => {
        //                 console.log('error')
        //             })
        //     } catch (e) {
        //         console.log(e);
        //     }
        // }
    }, [userName, userPoints, cookies.user])

    return (
        <div className="wrapper">
            <div className="border">
                <i className="fas fa-award award_icon" style={{ margin: '10px 0px 0px 130px', color: 'gold' }}></i>
                <h1 className="username"><span className="name" style={{ fontSize: '50px' }}></span><br />WELL DONE !</h1>
                <p className="userpoints">Your Points <span className="points" style={{ color: 'greenyellow' }}></span></p>
            </div>
        </div>
    );
};

export default QuizFinal;
