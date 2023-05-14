import React, { useState } from "react";
import Question from "./Question";
import { useNavigate } from "react-router-dom";
import QuizTimer from "./QuizTimer";
import Container from "./container";

const questions = [
  {
    question: "What is React?",
    choices: [
        "A JavaScript framework",
        "A JavaScript library",
        "A CSS framework",
        "A CSS library",
      ],
    answer: "A JavaScript framework",
  },
  {
    question: "What does JSX stand for?",
    choices: [
        "JavaScript XML",
        "Java Standard Extensions",
        "JavaScript Style eXtensions",
        "Java Syntax Extension",
      ],
    answer: "JavaScript XML",
  },
  {
    question: "What is the virtual DOM?",
    choices: [
        "A tool to create virtual machines",
        "A way to visualize your components",
        "An in-memory representation of the real DOM",
        "A new DOM implementation from React",
      ],
    answer: "A way to visualize your components",
  },
  {
    question: "React.js is written in which of the following language?",
    choices: ["C", "C++", "JavaScript", "Java"],
    answer: "JavaScript",
  },
  {
    question: "Which of the following command is used to Install create-react-app?",
    choices: ["npm install create-react-app", "npm install -f create-react-app", "npm install -g create-react-app", "install -g create-react-app"],
    answer: "npm install -g create-react-app",
  },
];

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0)

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setIndex(nextQuestion);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    localStorage.setItem("quizScore", JSON.stringify(score));
    localStorage.setItem("total", JSON.stringify(questions.length));
    localStorage.setItem("percentage", JSON.stringify(score/questions.length*100));
    navigate("/score");
  };
  return (
    <Container>
      <QuizTimer duration={60} onTimeUp={() => handleSubmit()} />
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion].question}
          choices={questions[currentQuestion].choices}
          answer={questions[currentQuestion].answer}
          onAnswer={handleAnswer}
          index={index}
        />
      ) : (
        "No questions posted."
      )}
    </Container>
  );
};

export default Quiz;
