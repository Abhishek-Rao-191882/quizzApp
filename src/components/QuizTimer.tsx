import { useState, useEffect } from 'react';

interface Props {
  duration: number;
  onTimeUp: () => void;
}

const QuizTimer: React.FC<Props> = ({ duration, onTimeUp }) => {
  const [remainingTime, setRemainingTime] = useState(duration);

  useEffect(() => {
    if (remainingTime <= 0) {
      onTimeUp();
      return;
    }

    const intervalId = setInterval(() => {
      setRemainingTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [remainingTime, onTimeUp]);

  return <div className='text-xl text-center py-10'>Time Left: {remainingTime<=15 ? <span className='text-red-800'>{remainingTime} Seconds</span>: <span>{remainingTime} Seconds</span> } </div>;
};

export default QuizTimer;