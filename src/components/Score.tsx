import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./container";

const QuizScore: React.FC = () => {
  return (
    <Container>
      <div className="text-center py-4">
        <h1 className="text-2xl">Congratulations!!</h1>
        <h1 className="text-xl mt-4">You have successfully completed the quiz.</h1>
        <p className="text-xl mt-4">You have scored:</p>
        <p className="text-2xl">{localStorage.getItem("quizScore")}/{localStorage.getItem("total")} ({localStorage.getItem("percentage")}%)</p>
        <p className="text-2xl"></p>
        <Link to={"/"}>
          <button className=" mt-10 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Go to homepage
          </button>
        </Link>

        <Link to={"/quiz"}>
          <button className="ml-4 mt-10 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Try again
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default QuizScore;
