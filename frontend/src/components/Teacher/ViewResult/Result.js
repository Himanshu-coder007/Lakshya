import React, { useState, useEffect } from "react";
import "./Result.css";
import axios from "axios";
import { Link } from 'react-router-dom'

const Result = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [subjectId, setSubjectId] = useState("");
  const [marksData, setMarksData] = useState([]);
  const [currentUserData, setCurrentUserData] = useState({});

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

  const changeMethodology = (id) => {
    try {
      axios.get(`http://localhost:5000/user/${id}`)
        .then((res) => {
          setCurrentUserData(res.data);
        })
      nextChangeMethodology(id)
    } catch (e) {
      console.log(e);
    }
  }

  const nextChangeMethodology = (id) => {
    try {
      var newLearningStyle = "";
      if (currentUserData.learningStyle === 'Visual')
        newLearningStyle = "Aural"
      else if (currentUserData.learningStyle === 'Aural')
        newLearningStyle = "Reading / Writing"
      else if (currentUserData.learningStyle === 'Reading / Writing')
        newLearningStyle = "Kinesthetic"
      else if (currentUserData.learningStyle === 'Kinesthetic')
        newLearningStyle = "Visual"
      console.log(newLearningStyle)
      const object = {
        learningStyle: newLearningStyle
      };
      axios.put(`http://localhost:5000/user/${id}`, object)
        .then((res) => {
          console.log(res)
        })
    } catch (e) {
      console.log(e);
    }
  }

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleSubjectChange = (event) => {
    const selectedSubjectId = event.target.value;
    setSubjectId(selectedSubjectId);
  }

  const tableData = {
    column1: "value1",
    column2: "value2",
    column3: "value3",
    column4: "value4",
  };

  const viewResults = () => {
    if (subjectId === "" && selectedClass === "")
      window.alert("Enter all the required fields")
    else {
      try {
        console.log(subjectId, " ", selectedClass);
        axios.get(`http://localhost:5000/quizData/${subjectId}/${selectedClass}`)
          .then((response) => {
            setMarksData(response.data)
          })
      } catch (err) {
      }
    }
  }

  return (
    <div className="studentHomePage">
      <header className="header">
        <div>
          <h1>WELCOME to Lakshya!!</h1>
        </div>
      </header>
      <div className="studentdashboardmainnDiv">
        <div className='side-bar'>
          <div id='close-btn'>
            <i className="fas fa-times"></i>
          </div>
          <nav className="navbar">
            <Link to='/teacher/'><span>Home</span></Link>
            <Link to="/teacher/generateAssessment"><span>Generate Assessment</span></Link>
            <Link to="/teacher/viewResult"><span>View Result</span></Link>
            <Link to="/teacher/addContent"><span>Add Content</span></Link>
            <Link to="/teacher/addSubject"><span>Add Subject</span></Link>
          </nav>
        </div>
        <div className='viewResultsTeacher'>
          <h1>Teacher's Dashboard - Result</h1>

          <div className="primary">
            <label>Choose Class:</label>
            <select onChange={handleClassChange}>
              <option>Select one:</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>

          <div className="secondary">
            <label>Choose Subject:</label>
            <select
              id="subject"
              name="subject"
              onChange={handleSubjectChange}
              value={subjectId}
            >
              <option>Select one:</option>
              {subjects.map((subject) => (
                <option key={subject._id} value={subject._id}>
                  {subject.subjectName}
                </option>
              ))}
            </select>
          </div>

          <button onClick={viewResults}>View Results</button>
          <div className="result">
            <h2>Result:</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Subject Name</th>
                  <th>Marks</th>
                  <th>HML Status</th>
                  <th>Change Methodology</th>
                </tr>
              </thead>
              <tbody>
                {marksData.map((marksSeperate, index) => {
                  return (
                    <tr key={index}>
                      <td>{marksSeperate.studentId}</td>
                      <td>{marksSeperate.subjectName}</td>
                      <td>{marksSeperate.marks}</td>
                      <td>{marksSeperate.hml}</td>
                      <td><button onClick={() => changeMethodology(marksSeperate.studentId)}>Yes</button></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
