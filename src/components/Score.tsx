import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./container";

const QuizScore: React.FC = () => {
  return (
    <Container>
      Score: {localStorage.getItem("quizScore")}
      <Link to={"/"}>
        <button>Go to homepage</button>
      </Link>
    </Container>
  );
};

export default QuizScore;
