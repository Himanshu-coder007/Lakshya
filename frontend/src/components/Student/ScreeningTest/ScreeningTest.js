import React from 'react';
import styles from './styles.module.css';
import varkData from './VARK_QuestionnaireData.js';
import { useNavigate } from 'react-router-dom';

const ScreeningTest = () => {
    const navigate = useNavigate();

    const submitQuiz = () => {
        const quizResults = {};
        document.querySelectorAll('input[type="radio"]:checked').forEach(input => {
            const questionName = input.name;
            const optionValue = input.value;
            quizResults[questionName] = optionValue;
        });

        if (document.querySelectorAll('input[type="radio"]:checked').length !== 16) {
            alert('Please answer all the questions!');
        }
        else {
            const responses = Object.entries(quizResults)
                .map(([questionName, value]) => `${encodeURIComponent(value)}`)
                .join('&');

            const url = `/Student/result/${responses}`;
            navigate(url);
        }
    }

    return (
        <div className={styles.screeningTestMainDiv}>
            <div className={styles.primary}>
                <header>
                    <div className={styles.head}>
                        <h1>Learning Style Identification Test</h1>
                    </div>
                </header>
                <section id={styles.quizSection}>
                    <form>
                        <ol id={styles.questionList}>
                            {varkData.map((questionData, index) => (
                                <li key={index} className={styles.questionContainer}>
                                    <div className={styles.main}>
                                        <p className={styles.questionMain}>{questionData.ques_name}</p>
                                        <div className={styles.options}>
                                            <div className={styles.ops}>
                                                <input
                                                    type='radio'
                                                    name={`question_${index + 1}`}
                                                    value={questionData.option1_type}
                                                />
                                                <p>a. {questionData.option1}</p>
                                            </div>
                                            <div className={styles.ops}>
                                                <input
                                                    type='radio'
                                                    name={`question_${index + 1}`}
                                                    value={questionData.option2_type}
                                                />
                                                <p>b. {questionData.option2}</p>
                                            </div>
                                            <div className={styles.ops}>
                                                <input
                                                    type='radio'
                                                    name={`question_${index + 1}`}
                                                    value={questionData.option3_type}
                                                />
                                                <p>c. {questionData.option3}</p>
                                            </div>
                                            <div className={styles.ops}>
                                                <input
                                                    type='radio'
                                                    name={`question_${index + 1}`}
                                                    value={questionData.option4_type}
                                                />
                                                <p>d. {questionData.option4}</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                        <button type="button" onClick={submitQuiz}>
                            Submit Quiz
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default ScreeningTest;
