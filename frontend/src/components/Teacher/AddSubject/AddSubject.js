// AddContentPage.js
import React, { useState } from 'react';
import styles from './AddSubject.module.css';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const AddSubject = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        subjectName: '',
        class: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const submitForm = (e) => {
        e.preventDefault();

        try {
            const object = {
                subjectName: formData.subjectName,
                class: formData.class
            }
            axios.post('http://localhost:5000/subject', object)
                .then((res) => {
                    navigate('/teacher')
                })
        } catch (err) {
            console.log(err);
        }
    };

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
                <div className={styles.addContentBody}>
                    <h1 className={styles.pageTitle}>Add Content</h1>
                    <form id="contentForm" className={styles.contentForm}>
                        <label htmlFor="subject">Subject Name:</label>
                        <input type="text" id="subjectName" name="subjectName" onChange={handleChange} required placeholder='Enter the Subject Name...' />

                        <label htmlFor="class">Class:</label>
                        <input type="text" id="class" name="class" onChange={handleChange} required placeholder='Enter the Class...' />

                        <button onClick={submitForm}>Add Content</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddSubject;
