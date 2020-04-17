import React, { useEffect } from 'react';
import './index.css';

const CountdownTimer = (props) => {

  const { secondsLeft, setSecondsLeft } = props;

  //setTimeout
  useEffect(() => {
    if (secondsLeft > 0) {
      const timerId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1)
      }, 1000);

      return () => clearTimeout(timerId);

    } 
  }, [secondsLeft, setSecondsLeft]);

  return (
    <div className="timer">Time Remaining: {secondsLeft}</div>
  );       

}    

export default CountdownTimer;