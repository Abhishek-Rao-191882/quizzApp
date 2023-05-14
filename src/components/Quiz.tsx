import React, { useState } from "react";
import Question from "./Question";
import { useNavigate } from "react-router-dom";
import QuizTimer from "./QuizTimer";
import Container from "./container";

const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "New York"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    choices: ["Mars", "Jupiter", "Venus"],
    answer: "Jupiter",
  },
  {
    question: "What is the boiling point of water?",
    choices: ["100°C", "0°C", "50°C"],
    answer: "100°C",
  },
  {
    question: "What is the largest planet in our solar system?",
    choices: ["Mars", "Jupiter", "Venus"],
    answer: "Jupiter",
  },
  {
    question: "What is the boiling point of water?",
    choices: ["100°C", "0°C", "50°C"],
    answer: "100°C",
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
      <QuizTimer duration={60} onTimeUp={() => console.log("completed")} />
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
