// AddContentPage.js
import React, { useState, useEffect } from 'react';
import styles from './AddContentPage.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddContentPage = () => {
    const [subjectId, setSubjectId] = useState("");
    const [subjects, setSubjects] = useState([]);

    const handleSubjectChange = (event) => {
        const selectedSubjectId = event.target.value;
        setSubjectId(selectedSubjectId);
    }

    useEffect(() => {
        try {
            axios.get('http://localhost:5000/subject')
                .then((res) => {
                    setSubjects(res.data)
                })
        } catch (e) {
            console.log(e);
        }
    }, []);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        class: '',
        subjectName: '',
        fileVisual: null,
        fileAural: null,
        fileReading: null,
        descriptionKinesthetic: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const submitForm = () => {
        try {
            const object = {
                topicName: formData.title,
                description: formData.description,
                class: formData.class,
            }
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
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" name="title" onChange={handleChange} required placeholder='Enter the Title...' />

                        <label htmlFor="description">Description:</label>
                        <textarea id="description" name="description" rows="4" onChange={handleChange} required placeholder='Enter the Description...' ></textarea>

                        <label htmlFor="subject">Subject:</label>
                        <input type="text" id="subject" name="subjectName" onChange={handleChange} required placeholder='Enter the Subject Name...' />

                        <label htmlFor="class">Class:</label>
                        <input type="text" id="class" name="class" onChange={handleChange} required placeholder='Enter the Class...' />

                        <label htmlFor="fileVisual">Visual:</label>
                        <input type="text" id="fileVisual" name="visualContent" onChange={handleChange} required placeholder='Enter the Visual Content...' />
                        {/* <input type="file" id="fileVisual" name="fileVisual" accept=".pdf, .doc, .docx" /> */}

                        <label htmlFor="fileAural">Aural:</label>
                        <input type="text" id="fileAural" name="auralContent" onChange={handleChange} required placeholder='Enter the Aural Content...' />
                        {/* <input type="file" id="fileAural" name="fileAural" accept=".pdf, .doc, .docx" /> */}

                        <label htmlFor="fileReading">Reading:</label>
                        <input type="text" id="fileReading" name="readingContent" onChange={handleChange} required placeholder='Enter the Reading Content...' />
                        {/* <input type="file" id="fileReading" name="fileReading" accept=".pdf, .doc, .docx" /> */}

                        <label htmlFor="descriptionKinesthetic">Kinesthetic:</label>
                        <input type="text" id="descriptionKinesthetic" name="kinestheticContent" onChange={handleChange} required placeholder='Enter the Kinesthetic Content...' />
                        {/* <textarea id="descriptionKinesthetic" name="descriptionKinesthetic" rows="4" required></textarea> */}

                        <button type="submit" onclick={submitForm}>Add Content</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddContentPage;
