import React, { useState, useEffect } from "react";
import "./GenerateAssessment.css";
import axios from 'axios'
import { Link } from 'react-router-dom'

const GenerateAssessment = () => {
  const [subjects, setSubjects] = useState([]);
  const [topic, setTopic] = useState([]);
  const [classLevel, setClassLevel] = useState(""); // Changed from "topic" to "classLevel"
  const [thresholdLow, setThresholdLow] = useState("");
  const [thresholdHigh, setThresholdHigh] = useState("");
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], correctOption: "", marks: "" },
  ]);
  const [subjectId, setSubjectId] = useState("");
  const [topicId, setTopicId] = useState("");

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

  useEffect(() => {
    if (subjectId.toString().length > 0) {
      try {
        axios.get(`http://localhost:5000/content`)
          .then((res) => {
            console.log(res.data)
            setTopic(res.data)
          })
      } catch (e) {
        console.log(e);
      }
    }
  }, [subjectId]);

  const handleSubjectChange = (event) => {
    const selectedSubjectId = event.target.value;
    setSubjectId(selectedSubjectId);
  }

  const handleTopicChange = (event) => {
    const selectedSubjectId = event.target.value;
    setTopicId(selectedSubjectId);
  }

  const handleGenerateAssessment = async () => {
    const assessmentData = {
      subject: subjectId,
      topic: topicId,
      classLevel,
      thresholdLow,
      thresholdHigh,
      questions,
    };

    try {
      const response = await axios.post('http://localhost:5000/generateAssessment', assessmentData);
      console.log('Successfully generated assessment!', response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddQuestion = () => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      { question: "", options: ["", "", "", ""] },
    ]);
  };

  const handleRemoveQuestion = (index) => {
    setQuestions((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      newQuestions.splice(index, 1);
      return newQuestions;
    });
  };

  const handleQuestionChange = (event, index) => {
    const { name, value } = event.target;
    setQuestions((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      newQuestions[index][name] = value;
      return newQuestions;
    });
  };

  const handleCorrectOptionChange = (event, index) => {
    const { name, value } = event.target;
    setQuestions((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      newQuestions[index][name] = value;
      return newQuestions;
    });
  };

  const handleMarksChange = (event, index) => {
    const { name, value } = event.target;
    setQuestions((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      newQuestions[index][name] = value;
      return newQuestions;
    });
  };

  const handleOptionChange = (event, questionIndex, optionIndex) => {
    const { value } = event.target;
    setQuestions((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      newQuestions[questionIndex].options[optionIndex] = value;
      return newQuestions;
    });
  };

  return (
    <div className='studentHomePage'>
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
            <Link to="/teacher/viewResult"><span>View Result</span></Link>
            <Link to="/teacher/addContent"><span>Add Content</span></Link>
            <Link to="/teacher/addSubject"><span>Add Subject</span></Link>
          </nav>
        </div>
        <div className="generate-assessment">
          <h2>Generate Assessment</h2>

          <div>
            <label for="subject">Select a Subject:</label>
            <select
              id="subject"
              name="subject"
              onChange={handleSubjectChange}
              value={subjectId}
            >
              <option value="">Select one...</option>
              {subjects.map((subject) => (
                <option key={subject._id} value={subject._id}>
                  {subject.subjectName}
                </option>
              ))}
            </select>
          </div>
          <label>
            Topic:
            <select
              id="topic"
              name="topic"
              onChange={handleTopicChange}
              value={topicId}
            >
              <option value="">Select one...</option>
              {topic.map((topic, index) => (
                <option key={topic._id} value={topic._id}>
                  {topic.topicName}
                </option>
              ))}
            </select>
          </label>

          <label>
            Class:
            <input
              type="text"
              value={classLevel}
              onChange={(e) => setClassLevel(e.target.value)}
            />
          </label>

          <h2>Add Questions: </h2>
          {
            questions.map((question, questionIndex) => (
              <div className="addSubTopics" key={questionIndex}>
                <button onClick={() => handleRemoveQuestion(questionIndex)}>-</button>
                <p className="addTopicHeading">
                  Question:
                  <input
                    type="text"
                    value={question.question}
                    name="question"
                    onChange={(e) => handleQuestionChange(e, questionIndex)}
                  />
                </p>
                <p className="addTopicHeading">
                  Options:
                  {question.options.map((option, optionIndex) => (
                    <input
                      key={optionIndex}
                      type="text"
                      value={option}
                      onChange={(e) =>
                        handleOptionChange(e, questionIndex, optionIndex)
                      }
                    />
                  ))}
                </p>
                <p className="addTopicHeading">
                  CorrectOption:
                  <input
                    type="text"
                    value={question.correctOption}
                    name="correctOption"
                    onChange={(e) => handleCorrectOptionChange(e, questionIndex)}
                  />
                </p>
                <p className="addTopicHeading">
                  Marks:
                  <input
                    type="text"
                    value={question.marks}
                    name="marks"
                    onChange={(e) => handleMarksChange(e, questionIndex)}
                  />
                </p>
              </div>
            ))
          }
          <div onClick={handleAddQuestion}>
            <button>+</button>
          </div>

          <div className="threshold">
            <label>
              Threshold Low:
              <input
                type="number"
                value={thresholdLow}
                onChange={(e) => setThresholdLow(e.target.value)}
              />
            </label>

            <label>
              Threshold High:
              <input
                type="number"
                value={thresholdHigh}
                onChange={(e) => setThresholdHigh(e.target.value)}
              />
            </label>
          </div>

          <button onClick={handleGenerateAssessment}>Generate Assessment</button>
        </div >
      </div>
    </div>
  );
};

export default GenerateAssessment;
