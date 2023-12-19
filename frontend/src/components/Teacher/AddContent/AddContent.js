// AddContentPage.js
import React, { useState } from 'react';
import styles from './AddContentPage.module.css';

const AddContentPage = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        subject: '',
        fileVisual: null,
        fileAural: null,
        fileReading: null,
        descriptionKinesthetic: '',
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value,
        }));
    };

    const submitForm = () => {
        console.log('Form Data:', formData);
    };

    return (
        <div className={styles.addContentBody}>
            <h1 className={styles.pageTitle}>Add Content</h1>
            <form id="contentForm" className={styles.contentForm}>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" required placeholder='Enter the Title...' />

                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" rows="4" required placeholder='Enter the Description...' ></textarea>

                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" required placeholder='Enter the Subject Name...' />

                <label htmlFor="fileVisual">Visual:</label>
                <input type="text" id="fileVisual" name="fileVisual" required placeholder='Enter the Visual Content...' />
                {/* <input type="file" id="fileVisual" name="fileVisual" accept=".pdf, .doc, .docx" /> */}

                <label htmlFor="fileAural">Aural:</label>
                <input type="text" id="fileAural" name="fileAural" required placeholder='Enter the Aural Content...' />
                {/* <input type="file" id="fileAural" name="fileAural" accept=".pdf, .doc, .docx" /> */}

                <label htmlFor="fileReading">Reading:</label>
                <input type="text" id="fileReading" name="fileReading" required placeholder='Enter the Reading Content...' />
                {/* <input type="file" id="fileReading" name="fileReading" accept=".pdf, .doc, .docx" /> */}

                <label htmlFor="descriptionKinesthetic">Kinesthetic:</label>
                <input type="text" id="descriptionKinesthetic" name="descriptionKinesthetic" required placeholder='Enter the Kinesthetic Content...' />
                {/* <textarea id="descriptionKinesthetic" name="descriptionKinesthetic" rows="4" required></textarea> */}

                <button type="submit" onclick="submitForm()">Add Content</button>
            </form>
        </div>
    );
};

export default AddContentPage;
