import React from "react";
import { Link } from "react-router-dom";
import Container from "./container";

const Home: React.FC = () => {
  return (
    <Container>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Quiz App
        </h1>
        <div className="border rounded-lg bg-gray-400 bg-opacity-5 w-full px-4 py-5 sm:py-10 sm:px-20 mt-4">
          <p className="text-lg leading-8 text-gray-600">
            This is a simple quiz, including easy questions, just give a try,
            and check your knowledge.
          </p>
          <div className="flex flex-col">
            <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
              This quiz includes:
            </p>
            <ul className="text-left list-disc list-inside text-gray-600 text-lg">
              <li>50% passing percentage.</li>
              <li>5 questions</li>
              <li>60 Seconds</li>
              <li>1 attempt daily</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/quiz">
            {" "}
            <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Take quiz
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Home;
