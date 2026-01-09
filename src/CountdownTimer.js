import React, { useState, useEffect } from 'react';

export default function CountdownTimer() {

    const[timer, setTimer] = useState(10);
    const[started, isStarted] = useState(false);

    useEffect(() => {
        let intervalStarted;
        if(started && timer > 0){
            intervalStarted = setInterval(() => {
                setTimer(prev => prev - 1);
            }, 1000)
        }
       return () => clearInterval(intervalStarted);
    },[timer, started])

    function startTimer(){
        isStarted(true)
    }

    return (
        <>
           <h2>Countdown timer:{timer}</h2>
           <button onClick={startTimer}>Start Timer</button>
        </>
    )
}