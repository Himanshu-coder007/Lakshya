import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from './styles.module.css';
import SVGImage from './Tick.svg'

const ResultPage = () => {
    const { responses } = useParams();
    const [VPercent, setVPercent] = useState();
    const [APercent, setAPercent] = useState();
    const [RPercent, setRPercent] = useState();
    const [KPercent, setKPercent] = useState();
    const [maxResult, setMaxResult] = useState("");

    useEffect(() => {
        var arrResult = [];
        for(let i in responses) {
            arrResult.push(responses[i])
        }
        var countA = 0, countR = 0, countV = 0, countK = 0;
        for (let i = 0; i < arrResult.length; i++) {
            if (arrResult[i] === "K")
                countK++;
            else if (arrResult[i] === "A")
                countA++;
            else if (arrResult[i] === "R")
                countR++;
            else if (arrResult[i] === "V")
                countV++;
        }

        console.log(countV)
        console.log(countA)
        console.log(countR)
        console.log(countK)

        setVPercent(countV / 16 * 100);
        setAPercent(countA / 16 * 100);
        setRPercent(countR / 16 * 100);
        setKPercent(countK / 16 * 100);

        var max = 0;
        setMaxResult("Visual");
        if (countV > max) {
            max = countV;
            setMaxResult("Visual");
        }
        if (countA > max) {
            max = countA;
            setMaxResult("Aural")
        }
        if (countR > max) {
            max = countR;
            setMaxResult("Reading / Writing");
        }
        if (countK > max) {
            max = countK;
            setMaxResult("Kinesthetic")
        }
    }, [responses])

    return (
        <div className={styles.resultPageMainDiv}>
            <header>
                <h1>Learning Style Test Result</h1>
            </header>
            <div className={styles.box1}>
                <div className={styles.box2}>
                    <h1>Result :</h1>
                    <img src={SVGImage} alt="TickSVG" />
                    <div id={styles.result}>Your predicted learning style is: {maxResult}</div>
                </div>

                <div className={styles.box3}>
                    <h1>Observation</h1>
                    <div className={styles.box4}>
                        <div id={styles.visual}><b>Visual: {VPercent}%</b></div>
                        <div id={styles.aural}><b>Aural: {APercent}%</b></div>
                        <div id={styles.reading}><b>Reading: {RPercent}%</b></div>
                        <div id={styles.kinesthetic}><b>Kinesthetic: {KPercent}%</b></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultPage