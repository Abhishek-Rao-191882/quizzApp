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

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    localStorage.setItem("quizScore", JSON.stringify(score));
    navigate("/score");
  };
  return (
    <Container>
      <h1 className="text-center">Quiz App</h1>
      <QuizTimer duration={10} onTimeUp={() => handleSubmit()} />
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion].question}
          choices={questions[currentQuestion].choices}
          answer={questions[currentQuestion].answer}
          onAnswer={handleAnswer}
        />
      ) : (
        "null"
      )}
    </Container>
  );
};

export default Quiz;
