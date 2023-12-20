import React, { useState, useEffect } from "react";
import "./GenerateAssessment.css";
import axios from 'axios'

const GenerateAssessment = () => {
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [classLevel, setClassLevel] = useState(""); // Changed from "topic" to "classLevel"
  const [thresholdLow, setThresholdLow] = useState("");
  const [thresholdHigh, setThresholdHigh] = useState("");
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""] },
  ]);
  const [subjects, setSubjects] = useState([]);
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
  }, [])

  const handleSubjectChange = (event) => {
    const selectedSubjectId = event.target.value;
    setSubjectId(selectedSubjectId);
  }

  const handleTopicChange = (event) => {
    const selectedSubjectId = event.target.value;
    setTopicId(selectedSubjectId);
  }

  const handleGenerateAssessment = () => {
    console.log("Assessment generated!");
    console.log({
      subject: subjectId,
      topic,
      classLevel,
      thresholdLow,
      thresholdHigh,
      questions,
    });
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

  const handleOptionChange = (event, questionIndex, optionIndex) => {
    const { value } = event.target;
    setQuestions((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      newQuestions[questionIndex].options[optionIndex] = value;
      return newQuestions;
    });
  };

  return (
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
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
      </label>

      <label>
        Class Level:
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
  );
};

export default GenerateAssessment;
