import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from './styles.module.css';
import SVGImage from './Tick.svg';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom'

const ResultPage = () => {
    const { responses } = useParams();
    const [maxResult, setMaxResult] = useState("");
    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {
        var arrResult = [];
        for (let i in responses) {
            arrResult.push(responses[i])
        }

        console.log(arrResult);
        var countADHD = 0, countDsylexia = 0, countAutism = 0, countDysgraphia = 0;
        for (let i = 0; i < 6; i++) {
            if (arrResult[i] === 'Y')
                countADHD++;
        }
        for (let i = 7; i < 12; i++) {
            if (arrResult[i] === 'Y')
                countDsylexia++;
        }
        for (let i = 13; i < 18; i++) {
            if (arrResult[i] === 'Y')
                countAutism++;
        }
        for (let i = 19; i < 24; i++) {
            if (arrResult[i] === 'Y')
                countDysgraphia++;
        }

        var str = "";
        if (countADHD >= 2)
            str = str + 'ADHD'
        if (countDsylexia >= 2) {
            if (str.length > 0)
                str = str + ', Dyslexia'
            else
                str = str + 'Dyslexia'
        }
        if (countAutism >= 2) {
            if (str.length > 0)
                str = str + ', Autism'
            else
                str = str + 'Autism'
        }
        if (countDysgraphia >= 2) {
            if (str.length > 0)
                str = str + ', Dysgraphia'
            else
                str = str + 'Dysgraphia'
        }
        setMaxResult(str)

        if (showAlert) {
            const alertTimeout = setTimeout(() => {
                window.alert('Kindly Concern a Doctor');
                setShowAlert(false); 
            }, 3000);
            
            return () => clearTimeout(alertTimeout);
        }
    }, [responses])

    // setTimeout(() => {
    //     window.alert('dbukn')
    // }, [300])

    return (
        <div className={styles.resultPageMainDiv}>
            <header>
                <h1>Learning Style Test Result</h1>
            </header>
            <div className={styles.box1}>
                <div className={styles.box2}>
                    <h1>Result :</h1>
                    {maxResult.length === 0 ?
                        <>
                            <img src={SVGImage} alt="TickSVG" />
                            <div id={styles.result}>No Learning Impairement</div>
                        </>
                        : <div id={styles.result}>There is a very High Chance that your Ward is having: {maxResult} learning impairement</div>
                    }
                </div>
            </div>
            <Link to='/parent'><button>Home</button></Link>
        </div>
    )
}

export default ResultPage