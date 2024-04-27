import React, { useState, useEffect } from 'react';

const CountDown = () => {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    let timer;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timer);
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    } else if (timeLeft <= 0) {
      clearInterval(timer);
    }

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, [isActive, timeLeft]); // Dependency array includes isActive and timeLeft

  const handleStart = () => {
    setIsActive(true);
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>Time Remaining: {formatTime(timeLeft)}</p>
      <button onClick={handleStart}>Start Countdown</button>
    </div>
  );
};

export default CountDown;
