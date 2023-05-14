import React, { useState } from "react";
import { Link } from "react-router-dom";
const Home: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative isolate lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-20"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="mx-auto max-w-2xl py-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Quiz App
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="flex flex-col">
              <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
                This quiz includes:
              </p>
              <ul className="text-left list-disc list-inside text-gray-600 text-lg">
                <li>50% passing percentage.</li>
                <li>5 questions</li>
                <li>1 mins</li>
                <li>1 attempt daily</li>
              </ul>
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
        </div>
      </div>
    </div>
  );
};

export default Home;
