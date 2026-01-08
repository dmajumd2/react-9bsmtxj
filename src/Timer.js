import React, {useRef, useState, useEffect } from 'react';


export default function Timer() {
  
  const [time, setTime] = useState(300);  
  const [isRunning, setIsRunning] = useState(false);

useEffect(() => {
    let intervalId;

    if(isRunning && time > 0){
        intervalId = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);
    }

    return () => clearInterval(intervalId);

},[isRunning, time])

  const startTimer = () => {
    setIsRunning(true);
  }

  const minutes = Math.floor(time/60);
  const seconds = time % 60;
  
  return (
    <>
        <h2>Timer {time}</h2>
        <h2>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h2>
        <button onClick={startTimer}>Start Timer</button>
    </>
  );
}