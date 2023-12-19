
document.addEventListener("DOMContentLoaded", function () {
  createQuiz(varkData);
});

function createQuiz(data) {
  const quizSection = document.getElementById("quizSection");
  const questionList = document.getElementById("questionList");

  Object.keys(data).forEach((questionNumber) => {
    const questionData = data[questionNumber];

    
    const questionContainer = document.createElement("li");

    
    const questionElement = document.createElement("div");
    questionElement.classList.add("main");
    questionElement.textContent = questionData.ques_name;

   
    questionContainer.appendChild(questionElement);

    
    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("ops");

   
    for (let i = 1; i <= 4; i++) {
      const optionContainer = document.createElement("div");
      optionContainer.classList.add("mcq-option");

      const radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.name = `question_${questionNumber}`;
      if(i == 1)
      radioInput.value = questionData.option1_type;
      else if (i == 2) radioInput.value = questionData.option2_type;
      else if (i == 3) radioInput.value = questionData.option3_type;
      else if (i == 4) radioInput.value = questionData.option4_type;

      const label = document.createElement("label");
      if (i == 1) label.textContent = `a. ${questionData[`option${i}`]}`;
      else if (i == 2) label.textContent = `b. ${questionData[`option${i}`]}`;
      else if (i == 3) label.textContent = `c. ${questionData[`option${i}`]}`;
      else if (i == 4) label.textContent = `d. ${questionData[`option${i}`]}`;

      optionContainer.appendChild(radioInput);
      optionContainer.appendChild(label);

      optionsContainer.appendChild(optionContainer);
    }

   
    questionContainer.appendChild(optionsContainer);

    
    questionList.appendChild(questionContainer);
  });
}
