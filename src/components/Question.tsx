import React from "react";
interface Props {
  question: string;
  choices: string[];
  answer: string;
  onAnswer: (answer: string) => void;
  index: number;
}

const Question: React.FC<Props> = ({
  question,
  choices,
  answer,
  onAnswer,
  index,
}) => {
  return (
    <div className="border rounded-lg bg-gray-400 bg-opacity-5 w-full px-4 py-10 sm:py-20 sm:px-60">
      <h2 className="text-xl">
        {index + 1}. {question}
      </h2>
      <div className="flex flex-col">
        {choices.map((choice, index) => (
          <button
            className="border text-left px-4 border-blue-200 bg-green-200 bg-opacity-60 rounded-md py-1 mt-4 hover:border-green-200 hover:bg-blue-200"
            onClick={() => onAnswer(choice)}
            key={index}
          >
            {index + 1}. {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
